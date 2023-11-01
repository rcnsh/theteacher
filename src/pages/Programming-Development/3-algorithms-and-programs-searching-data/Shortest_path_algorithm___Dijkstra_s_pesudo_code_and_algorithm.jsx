import React from "react";

function Shortest_path_algorithm___Dijkstra_s_pesudo_code_and_algorithm() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Shortest path algorithm - Dijkstra's pesudo-code
                                and algorithm
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                The code below is an example of an
                                implementation of Dijkstra's algorithm in Python
                                3.&nbsp;
                              </p>

                              <p>
                                The vertices in the graph are given by the
                                following:
                              </p>
                              <p>
                                <strong>Number name</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;1 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;a
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;2 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;b
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;c
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;4 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;d
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;5 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;e
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp;f
                                </strong>
                              </p>
                              <p>
                                The edges and their weightings are given as
                                follows]
                              </p>
                              <p>
                                <strong>
                                  Start &nbsp; End &nbsp; Weighting
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; a &nbsp; &nbsp; &nbsp; b &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;7
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; a &nbsp; &nbsp; &nbsp; c &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;9
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; a &nbsp; &nbsp; &nbsp; f &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;14
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; b &nbsp; &nbsp; &nbsp; c &nbsp; &nbsp;
                                  &nbsp; &nbsp; 10
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; b &nbsp; &nbsp; &nbsp; d &nbsp; &nbsp;
                                  &nbsp; &nbsp; 15
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; c &nbsp; &nbsp; &nbsp; d &nbsp; &nbsp;
                                  &nbsp; &nbsp; 11
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; c &nbsp; &nbsp; &nbsp; f &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;2
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; d &nbsp; &nbsp; &nbsp; e &nbsp; &nbsp;
                                  &nbsp; &nbsp; 6
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; e &nbsp; &nbsp; &nbsp; f &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp;9
                                </strong>
                              </p>
                              <p>
                                When you run Dijkstra's algorithm, it should
                                return the shortest path as:{" "}
                                <strong>a c d e</strong>.
                              </p>
                              <p>The pseudo-code is as follows:</p>
                              <pre
                                style="
                              font-family: monospace, Courier;
                              border-width: 1px;
                              border-top-style: solid;
                              border-right-style: solid;
                              border-bottom-style: solid;
                              border-color: #dddddd;
                              line-height: 1.3em;
                              font-size: 14px;
                              background-color: #f9f9f9;
                            "
                              >
                                1 <strong>function</strong> Dijkstra(
                                <i>Graph</i>, <i>source</i>): 2 3 dist[
                                <i>source</i>] ← 0{" "}
                                <i>// Distance from source to source</i>4 prev[
                                <i>source</i>] ← undefined{" "}
                                <i>
                                  // Previous node in optimal path
                                  initialization
                                </i>
                                5 6 <strong>for each</strong> vertex <i>v</i> in{" "}
                                <i>Graph</i>: <i>// Initialization</i>7{" "}
                                <strong>if</strong> <i>v</i> ≠ <i>source</i>{" "}
                                <i>
                                  // Where v has not yet been removed from Q
                                  (unvisited nodes)
                                </i>
                                8 dist[<i>v</i>] ← infinity{" "}
                                <i>
                                  // Unknown distance function from source to v
                                </i>
                                9 prev[<i>v</i>] ← undefined{" "}
                                <i>
                                  // Previous node in optimal path from source
                                </i>
                                10 <strong>end if</strong>
                                11 add <i>v</i> to <i>Q</i>{" "}
                                <i>
                                  // All nodes initially in Q (unvisited nodes)
                                </i>
                                12 <strong>end for</strong>
                                13 14 <strong>while</strong> <i>Q</i> is not
                                empty: 15 <i>u</i> ← vertex in <i>Q</i> with min
                                dist[u] <i>// Source node in first case</i>
                                16 remove <i>u</i> from <i>Q</i>
                                17 18 <strong>for each</strong> neighbor{" "}
                                <i>v</i> of <i>u</i>:{" "}
                                <i>// where v is still in Q.</i>
                                19 <i>alt</i> ← dist[<i>u</i>] + length(<i>u</i>
                                , <i>v</i>) 20 <strong>if</strong> <i>alt</i>{" "}
                                &lt; dist[<i>v</i>]:{" "}
                                <i>// A shorter path to v has been found</i>
                                21 dist[<i>v</i>] ← <i>alt</i>
                                22 prev[<i>v</i>] ← <i>u</i>
                                23 <strong>end if</strong>
                                24 <strong>end for</strong>
                                25 <strong>end while</strong>
                                26 27 <strong>return</strong> dist[], prev[] 28
                                29 <strong>end function</strong>
                              </pre>
                              <p>The algorithm is as follows:</p>
                              <pre
                                class="python highlighted_source"
                                style="
                              font-family: monospace, Courier;
                              border: 1px dashed #2f6fab;
                              line-height: 1.3em;
                              overflow: auto;
                              font-size: 12.8000001907349px;
                              background-color: #f9f9f9;
                            "
                              >
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  from
                                </span>{" "}
                                <span
                                  class="kw3"
                                  style="font-weight: bold; color: #3333cc;"
                                >
                                  collections
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  import
                                </span>{" "}
                                namedtuple
                                <br />
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  from
                                </span>{" "}
                                <span
                                  class="kw3"
                                  style="font-weight: bold; color: #3333cc;"
                                >
                                  pprint
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  import
                                </span>{" "}
                                <span
                                  class="kw3"
                                  style="font-weight: bold; color: #3333cc;"
                                >
                                  pprint
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  as
                                </span>{" "}
                                pp
                                <br />
                                &nbsp;
                                <br />
                                &nbsp;
                                <br />
                                inf <span class="sy0">=</span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  float
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  'inf'
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />
                                Edge <span class="sy0">=</span> namedtuple
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  'Edge'
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  'start, end, cost'
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />
                                &nbsp;
                                <br />
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  class
                                </span>{" "}
                                Graph
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                :<br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  def
                                </span>{" "}
                                <span
                                  class="kw4"
                                  style="font-weight: bold; color: #6666cc;"
                                >
                                  __init__
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                <span class="sy0">,</span> edges
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                :<br />{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  edges
                                </span>{" "}
                                <span class="sy0">=</span> edges2{" "}
                                <span class="sy0">=</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                Edge
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                *edge
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                edge{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                edges
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <br />{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>{" "}
                                <span class="sy0">=</span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  set
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  sum
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                e.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  start
                                </span>
                                <span class="sy0">,</span> e.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  end
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                e{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                edges2
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />
                                &nbsp;
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  def
                                </span>{" "}
                                dijkstra
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                <span class="sy0">,</span> source
                                <span class="sy0">,</span> dest
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                :<br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  assert
                                </span>{" "}
                                source{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>
                                <br /> dist <span class="sy0">=</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                vertex: inf{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                vertex{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                <br /> previous <span class="sy0">=</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                vertex:{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  None
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                vertex{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                <br /> dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                source
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                <span class="sy0">=</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  0
                                </span>
                                <br /> q <span class="sy0">=</span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>
                                .
                                <span
                                  class="kw3"
                                  style="font-weight: bold; color: #3333cc;"
                                >
                                  copy
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br /> neighbours <span class="sy0">=</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                vertex:{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  set
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                vertex{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  vertices
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                ></span>
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                start<span class="sy0">,</span> end
                                <span class="sy0">,</span> cost{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  self
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  edges
                                </span>
                                :<br /> neighbours
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                start
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                .
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  add
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                end<span class="sy0">,</span> cost
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />{" "}
                                <span
                                  class="co1"
                                  style="color: #666666; font-style: italic;"
                                >
                                  #pp(neighbours)
                                </span>
                                <br />
                                &nbsp;
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  while
                                </span>{" "}
                                q:
                                <br /> u <span class="sy0">=</span>{" "}
                                <span
                                  class="kw2"
                                  style="font-weight: bold; color: #0000cc;"
                                >
                                  min
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                q<span class="sy0">,</span> key
                                <span class="sy0">=</span>
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  lambda
                                </span>{" "}
                                vertex: dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                vertex
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br /> q.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  remove
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  if
                                </span>{" "}
                                dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                <span class="sy0">==</span> inf{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  or
                                </span>{" "}
                                u <span class="sy0">==</span> dest:
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  break
                                </span>
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  for
                                </span>{" "}
                                v<span class="sy0">,</span> cost{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  in
                                </span>{" "}
                                neighbours
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                :<br /> alt <span class="sy0">=</span> dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                + cost
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  if
                                </span>{" "}
                                alt <span class="sy0">&lt;</span> dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                v
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                :{" "}
                                <span
                                  class="co1"
                                  style="color: #666666; font-style: italic;"
                                >
                                  # Relax (u,v,a)
                                </span>
                                <br /> dist
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                v
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                <span class="sy0">=</span> alt
                                <br /> previous
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                v
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>{" "}
                                <span class="sy0">=</span> u<br />{" "}
                                <span
                                  class="co1"
                                  style="color: #666666; font-style: italic;"
                                >
                                  #pp(previous)
                                </span>
                                <br /> s<span class="sy0">,</span> u{" "}
                                <span class="sy0">=</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <span class="sy0">,</span> dest
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  while
                                </span>{" "}
                                previous
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                :<br /> s.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  insert
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  0
                                </span>
                                <span class="sy0">,</span> u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br /> u <span class="sy0">=</span> previous
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <br /> s.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  insert
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  0
                                </span>
                                <span class="sy0">,</span> u
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />{" "}
                                <span
                                  class="kw1"
                                  style="font-weight: bold; color: #0000ff;"
                                >
                                  return
                                </span>{" "}
                                s<br />
                                &nbsp;
                                <br />
                                &nbsp;
                                <br />
                                graph <span class="sy0">=</span> Graph
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  [
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "a"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "b"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  7
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "a"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "c"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  9
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "a"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "f"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  14
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "b"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "c"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  10
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>
                                <br />{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "b"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "d"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  15
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "c"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "d"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  11
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "c"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "f"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  2
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "d"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "e"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  6
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span class="sy0">,</span>
                                <br />{" "}
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "e"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "f"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span
                                  class="nu0"
                                  style="font-weight: bold; color: #009999;"
                                >
                                  9
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  ]
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <br />
                                pp
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                graph.
                                <span
                                  class="me1"
                                  style="font-weight: bold; color: #993399;"
                                >
                                  dijkstra
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  (
                                </span>
                                <span class="st0" style="color: #ff0000;">
                                  "a"
                                </span>
                                <span class="sy0">,</span>{" "}
                                <span class="st0" style="color: #ff0000;">
                                  "e"
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                                <span
                                  class="br0"
                                  style="font-weight: bold; color: #009900;"
                                >
                                  )
                                </span>
                              </pre>
                              <p>
                                The above code was taken from Wikipedia via
                                rosettacode.org under the GNU licence and has
                                been tested using Python 3.4 and works. You can
                                copy and paste the above code straight into a
                                Python file, save and then run it for your self.
                                There are
                                <a
                                  href="http://rosettacode.org/wiki/Dijkstra%27s_algorithm"
                                  target="_blank"
                                >
                                  working solutions to this problem for another
                                  22 programming languages here.
                                </a>
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortest_path_algorithm___Dijkstra_s_pesudo_code_and_algorithm;
