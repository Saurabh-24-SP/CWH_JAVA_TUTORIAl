export default function FloatingShapes() {
  return (
    <>
      <div 
        className="floating-shape bg-neon-purple"
        style={{
          width: '300px',
          height: '300px',
          top: '10%',
          left: '5%',
          animationDelay: '0s',
        }}
      />
      <div 
        className="floating-shape bg-neon-cyan"
        style={{
          width: '250px',
          height: '250px',
          top: '50%',
          right: '10%',
          animationDelay: '2s',
        }}
      />
      <div 
        className="floating-shape bg-neon-mint"
        style={{
          width: '200px',
          height: '200px',
          bottom: '15%',
          left: '15%',
          animationDelay: '4s',
        }}
      />
      <div 
        className="floating-shape bg-neon-pink"
        style={{
          width: '180px',
          height: '180px',
          top: '30%',
          right: '30%',
          animationDelay: '1s',
        }}
      />
    </>
  );
}
