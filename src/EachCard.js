import React from "react";
import { Link } from "react-router-dom";

class Eachcard extends React.Component {
  render() {
    return (
      <div className="each-card">
        <Link
          className="card-link"
          to={`/funds/${this.props.fundDetails["code"]}`}
        >
          <p className="fund-name">{this.props.fundDetails["name"]}</p>
          <p><strong>Category: </strong>{this.props.fundDetails["category"]}</p>
          <p><strong>Fund Type: </strong>{this.props.fundDetails["fund_type"]}</p>
          <p><strong>Plan: </strong>{this.props.fundDetails["plan"]}</p>
          <p><strong>Fund Category: </strong>{this.props.fundDetails["fund_category"]}</p>
          {this.props.fundDetails.returns ? (
            <>
              <p><strong>Year 1: </strong>{this.props.fundDetails["returns"]["year_1"]}</p>
              <p><strong>Year 3: </strong>{this.props.fundDetails["returns"]["year_3"]}</p>
              <p><strong>Year 5: </strong>{this.props.fundDetails["returns"]["year_5"]}</p>
            </>
          ) : null}
        </Link>
      </div>
    );
    // }
  }
}

export default Eachcard;
