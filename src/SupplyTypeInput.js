export const SupplyTypeInput = ({
    handleUpdate,
    prediction,
}) => {
  return <input type="text" value={prediction} className="guess" onChange={handleUpdate} name="predict"/>
}