const Screen = ({value}) => {
  return (
    <div className="bg-white rounded-3 mb-4 p-2 text-end fs-3 fw-semibold shadow-sm" style={{ minHeight: '60px', letterSpacing: '1px', textOverflow: "clip", overflowX: 'auto', overflowY: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', whiteSpace: 'nowrap' }}>
      {value}
    </div>
  );
};

export default Screen;