import React from 'react'

const Loader: React.FC<{ loading: boolean }> = ({loading}) => {
  return (
    <div
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
        transition: 'opacity 0.8s ease',
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span style={{ fontSize: 24 }}>Carregando...</span>
    </div>
  )
}

export default Loader;