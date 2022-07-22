const DetailMenuModal = ({ menuId, setIsVisible }) => {
  const onSubmitBtn = () => {
    setIsVisible(false);
    
  };
  return (
    <div className="detail-menu-modal">
      <div>// Modal 세부 내용들</div>
      <div className="detail-model-submit">
        <button onClick={() => onSubmitBtn()}>주문표에 추가</button>
      </div>
    </div>
  );
};