import React from "react";
import Card from "./Card";
import "./Box.css";

import {b_img1, b_img2, b_img3, b_img4} from "../../../Exports";

/* var par = [
  "Department of Mathematics came into existence in 1976, with the objective of developing it to a Centre of Excellence in this region in mathematical sciences and to provide facilities for training, study and research in these areas.",
  "The Department conducts an M.Sc. Degree programme, M.Phil. Programme in Mathematics and Ph.D. programmes. The students generally take up teaching positions or opt for research or join industry",
  "Thrust areas of research are Algebra, Semi groups Theory, Stochastic Control theory, Retrial Queues, Mathematical Finance, Graph Theory, Algebraic Graph Theory,Fuzzy Mathematics, Wavelet Analysis, Operator Theory and Topology.",
  "The department has joined hands with Azim Premji University and Ramanujan Mathematical Society to conduct workshops on innovative teaching practises for school teachers.Co-ordinating the Mathematical Olympiads of NBHM –DAE.",
]; */

export default function Box() {
  return (
    <div className="boxes">
      <Card head="Department" img={b_img1} para={""} />
      <Card head="Courses" img={b_img2} para={""} />
      <Card head="Areas Of Research" img={b_img3} para={""} />
      <Card head="Out Reach" img={b_img4} para={""} />
    </div>
  );
}
