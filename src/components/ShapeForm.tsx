import useStore from "../store";

export const ShapeForm = () => {
  const { shape, size, setShape, setSize } = useStore();

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShape(e.target.value);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validSizes = ["", "1", "2", "3"];
    validSizes.includes(e.target.value) ? setSize(e.target.value) : null;
  };

  return (
    <>
      <div className="shape-container">
        <select className="select-shape-item" value={shape} onChange={handleChangeSelect}>
          <option value="">Wybierz figurę</option>
          <option value="cube">Sześcian</option>
          <option value="sphere">Kula</option>
        </select>
      </div>

      <div className="size-container">
        <input
          className="input-size-item"
          type="number"
          value={size}
          onChange={handleChangeInput}
          placeholder="Wpisz rozmiar"
        />
      </div>
    </>
  );
};
