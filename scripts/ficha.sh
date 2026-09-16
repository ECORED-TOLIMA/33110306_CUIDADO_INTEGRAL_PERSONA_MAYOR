#!/bin/bash
# ficha.sh <artboard> <pagina> <dx> <dy> <salida>
set -e
AB=$1; PG=$2; export XD_DX=$3 XD_DY=$4; OUT=$5
{
echo "########## SPEC"
timeout 900 python3 scripts/spec_pantalla.py $AB $PG 2>&1
echo "########## TEXTOS"
python3 - "$AB" "$3" "$4" <<'PY'
import json, glob, sys
sys.path.insert(0,'scripts')
import config as C
ab,dx,dy=sys.argv[1],float(sys.argv[2]),float(sys.argv[3])
agc=glob.glob(f"{C.XDDIR}/artwork/artboard-{ab}*/graphics/graphicContent.agc")[0]
d=json.load(open(agc,encoding='utf8')); out=[]
def walk(n,ox=0,oy=0):
    t=n.get('transform') or {}
    x,y=ox+t.get('tx',0),oy+t.get('ty',0)
    if 'group' in n:
        for c in n['group'].get('children',[]): walk(c,x,y)
        return
    tx=n.get('text')
    if tx and tx.get('rawText'):
        st=n.get('style') or {}; f=st.get('font') or {}; fr=tx.get('frame') or {}
        out.append((round(y+dy),round(x+dx),f.get('postscriptName'),f.get('size'),fr.get('width'),tx['rawText']))
h=d.get('children') or []
if h and 'artboard' in h[0]: h=h[0]['artboard'].get('children',[])
for c in h: walk(c)
for y,x,fn,sz,w,raw in sorted(out):
    print(f'--- y={y} x={x} {fn} {sz}px w={w}')
    print(raw)
PY
echo "########## GRUPOS"
timeout 600 python3 scripts/gen_asset.py $AB --lista --grupos 2>&1 | grep -E "^group"
} > $OUT 2>&1
wc -l < $OUT
