import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={handleModalToggle}>Show Modal</button>
      {showModal && (
        <Modal onClose={handleModalToggle}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
