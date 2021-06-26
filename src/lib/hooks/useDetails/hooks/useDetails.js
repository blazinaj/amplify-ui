/**
 * Displays the details of a single database item
 * @param props
 */
export const useDetails = ({item}) => {
  const display =
    <div>
      {JSON.stringify(item)}
    </div>

  return {
    display
  }
}