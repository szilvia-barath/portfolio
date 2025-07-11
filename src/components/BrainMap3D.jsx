// BrainMap3D.jsx
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import graphData from '../data/graphData';
import useTranslation from '../hooks/useTranslation';
import { translations } from '../data/translations.js';

export default function BrainMap3D() {
  const fgRef = useRef();
  const { t, lang } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.cameraPosition(
        { x: 0, y: 0, z: 300 },
        { x: 0, y: 0, z: 0 },
        3000
      );
    }
  }, []);

  const projectMap = {
    'GlucoReflect': 'glucoreflect',
    'Ada Lovelace': 'ada-lovelace-storytelling',
    'Vocabulary of Resistance': 'vocabulary-of-resistance',
    'Towards a Grammar of Resistance': 'grammar-of-resistance',
    'Hymn of Resistance': 'hymn-of-resistance',
    'My Brainmap': 'brainmap'
  };

  const handleNodeClick = (node) => {
    const slug = projectMap[node.id];
    if (slug) {
      navigate(`/projects/${slug}`);
    } else {
      new Audio('/sounds/chime.mp3').play();
    }
  };

  const getNodeLabel = (node) => {
    const nodeData = translations[lang]?.nodes?.[node.id];
    return nodeData?.description || node.description;
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
        nodeLabel={getNodeLabel}
        nodeAutoColorBy="group"
        linkDirectionalParticles={2000}
        linkColor={(link) => (link.source.id === 'Mind' ? '#c084fc' : '#444')}
        enableNodeDrag
        cooldownTicks={1000}
        onEngineStop={() => fgRef.current.zoomToFit(400)}
        onNodeClick={handleNodeClick}
        onNodeHover={(node) => {
          document.body.style.cursor = node ? 'pointer' : 'default';
        }}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(getNodeTitle(node));
          sprite.color = node.id === 'Mind' ? '#c084fc' : '#eae6dc';
          sprite.textHeight = 7;
          sprite.fontWeight = 'normal';
          sprite.fontFace ='monospace';
          sprite.borderRadius = 4;
          return sprite;
        }}
      />
    </div>
  );
}
