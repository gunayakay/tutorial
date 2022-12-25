import * as React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      {/* Difference between Link and a  Link is not refreshing page but a is doing that why we are usinge Link in gatsby   */}
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
    </div>
  );
}
