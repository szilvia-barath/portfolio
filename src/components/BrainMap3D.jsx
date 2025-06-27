// BrainMap3D.jsx
import { useRef, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import graphData from '../data/graphData';
import  useTranslation  from '../hooks/useTranslation';
import { translations } from '../data/translations.js';
import { animate } from 'motion';

export default function BrainMap3D() {
  const fgRef = useRef();
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.cameraPosition(
        { x: 0, y: 0, z: 300 },
        { x: 0, y: 0, z: 0 },
        3000
      );
    }
  }, []);

  const getNodeLabel = (node) => {
    const nodeData = translations[lang]?.nodes?.[node.id];
    if (!nodeData) return node.description;
    return `<b>${nodeData.id}</b><br/>${nodeData.description}`;
  };

  const getNodeTitle = (node) => {
    const nodeData = translations[lang]?.nodes?.[node.id];
    return nodeData?.id || node.id;
  };

  return (
    <div className="w-full h-full font-thin pointer-events-auto">
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        backgroundColor="#0e0e0e"
        nodeLabel={getNodeLabel}
        nodeAutoColorBy="group"
        linkDirectionalParticles={1000}
        linkColor={(link) => (link.source.id === 'Mind' ? '#c084fc' : '#444')}
        onNodeClick={() => new Audio('/sounds/chime.mp3').play()}
        enableNodeDrag
        cooldownTicks={100}
        onEngineStop={() => fgRef.current.zoomToFit(400)}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(getNodeTitle(node));
          sprite.color = node.id === 'Mind' ? '#c084fc' : '#eae6dc';
          sprite.textHeight = 7;
          return sprite;
        }}
      />
    </div>
  );
}
