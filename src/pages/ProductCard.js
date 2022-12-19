import "./productCard.css";
export function ProductCard(props) {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div
            className="top"
            style={{
              backgroundImage: "url(" + `${props.itemUrl}` + ")",

              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
            }}
          ></div>

          <div style={{ textAlign: "center" }}>
            <h2>SKU: {props.itemSku}</h2>
            <p>SRP: £{props.itemPrice}</p>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <i className="material-icons">Info</i>
          </div>
          <div className="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
