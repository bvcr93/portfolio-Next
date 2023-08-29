import { useEffect, useRef } from "react";

const CursorTrail: React.FC = () => {
  const prevPos = useRef({ x: 0, y: 0 });
  const paths: SVGPathElement[] = [];

  const createPath = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): SVGPathElement => {
    const svgNS = "http://www.w3.org/2000/svg";

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M${x1},${y1} L${x2},${y2}`);
    path.setAttribute("stroke", "royalblue");
    path.setAttribute("stroke-width", "5"); // Adjust the thickness here
    path.setAttribute("fill", "none");

    const svg = document.createElementNS(svgNS, "svg");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";

    // Create the glow filter
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", `glow-${Date.now()}`); // Unique ID using timestamp
    svg.appendChild(filter);

    const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
    feGaussianBlur.setAttribute("stdDeviation", "3"); // Adjust for more or less blur
    feGaussianBlur.setAttribute("result", "coloredBlur");
    filter.appendChild(feGaussianBlur);

    const feMerge = document.createElementNS(svgNS, "feMerge");
    filter.appendChild(feMerge);

    const feMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
    feMergeNode1.setAttribute("in", "coloredBlur");
    feMerge.appendChild(feMergeNode1);

    const feMergeNode2 = document.createElementNS(svgNS, "feMergeNode");
    feMergeNode2.setAttribute("in", "SourceGraphic");
    feMerge.appendChild(feMergeNode2);

    // Attach the filter to the path
    path.setAttribute("filter", `url(#${filter.getAttribute("id")})`);

    svg.appendChild(path);
    document.body.appendChild(svg);

    // Fade out animation
    path.style.transition = "opacity 1s";
    path.style.opacity = "1";
    setTimeout(() => {
      path.style.opacity = "0";
    }, 10);

    // Remove SVG after 1 second
    setTimeout(() => {
      svg.remove();
      paths.shift();
    }, 1000);

    return path;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const path = createPath(
        prevPos.current.x,
        prevPos.current.y,
        e.pageX,
        e.pageY
      );
      paths.push(path);
      prevPos.current = { x: e.pageX, y: e.pageY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      paths.forEach((path) => path.parentElement?.remove());
    };
  }, []);

  return null;
};

export default CursorTrail;
