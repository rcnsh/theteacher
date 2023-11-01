import React from "react";

function Shortest_path_algorithm___Dijkstra_s_algorithm___how_does_it_work_() {
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
                                Shortest path algorithm - Dijkstra's algorithm -
                                how does it work?
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                <span style="line-height: 16.3636360168457px">
                                  You might want to remind yourself about graphs
                                  before you begin looking at Dijkstra's
                                  algorithm and the A* algorithm.
                                  <a
                                    href="/index.php/computing-principles-01/1-4-data-types-structures-and-algorithms/1-4-2-data-structures"
                                    target="_blank"
                                  >
                                    You can do that in this section.
                                  </a>
                                  &nbsp;
                                </span>
                                In Maths, a{" "}
                                <em>
                                  <strong>graph</strong>{" "}
                                </em>
                                is a representation of a set of objects.&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  The objects are called&nbsp;
                                </span>
                                <strong style="line-height: 16.3636360168457px">
                                  <em>vertices.</em>
                                </strong>
                                Some pairs of vertices are connected together by
                                links, which are known as&nbsp;
                                <em>
                                  <strong>edges</strong>
                                </em>
                                . In Maths, the edges are usually
                                <strong>
                                  <em>weighted</em>
                                </strong>
                                , or given a value that represents an abstract
                                amount. An example of a graph might include a
                                map. The towns and cities represent the vertices
                                and the roads that link them represent the
                                edges. Another example would be the routers on
                                the Internet. Routers are like post offices,
                                that spend their day forwarding packets of data
                                on the Internet on to their destination. A
                                router does this by forwarding each packet to
                                another router closer to where the packet needs
                                to go, until eventually, the packets arrive at
                                their destination. The routers are the vertices
                                and the interconnections between the routers are
                                the edges.&nbsp;
                              </p>
                              <p>
                                When you have a web of vertices interconnected
                                like this, you often need to know the shortest
                                path from one place (vertex) in the graph to
                                another vertex in the graph, as there are
                                clearly many different paths that could be
                                taken. If you can find the edges from one vertex
                                to another that have the smallest weighting,
                                then you have identified the shortest route. If
                                you can identify the shortest route, you can
                                maximise the resources by, for example, reducing
                                the time that any communication takes or
                                reducing how much searching needs to be done.
                                The Dijkstra's algorithm is an algorithm that
                                identifies the shortest path between two
                                vertices.
                              </p>

                              <p>
                                <strong>
                                  How does the Dijkstra algorithm work?
                                </strong>
                                <br />
                                Before we look at the algorithm, we will try to
                                understand how it works. Consider this example
                                graph:
                              </p>
                              <p>
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/8a06ae89-3bcf-4b03-9d58-21d790e100f9dijk1.GIF"
                                  alt="dijk1"
                                />
                              </p>
                              <p>
                                We want to calculate the shortest distance from
                                K to Q, in other words, the smallest weighting.
                                The first thing to be aware of that the numbers
                                in the graph are weightings, not distances. They
                                are a conceptual amount of the distance between
                                two vertices, not an actual length you can
                                measure with a ruler. That's why the 'distance'
                                from L to N can be 2 whilst the 'distance' from
                                N to P is 9, even though the lines look about
                                the same length.
                              </p>
                              <p>
                                The first thing we will do is to keep track of
                                paths using a table. We will show all the
                                vertices along the top, and the starting vertex
                                down the side. Because there is no weighting to
                                go from K to K, we can fill in the first
                                distance using 0<sub>K</sub>. The subscript K
                                shows that we are starting at vertex K. We will
                                also change the colour of this, to show that we
                                have finished with that vertex.
                              </p>
                              <p>
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/8510dd5e-be27-4279-a29e-e21d6ce8301ddijk2.GIF"
                                  alt="dijk2"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  From K, we can go to L, which is a weighting
                                  of 3. We can go to M, which is a weighting of
                                  5. We can also go to N, which is a weighting
                                  of 6. We cannot get to O, P and Q directly
                                  from K so the weighting for those will be
                                  infinite, to signify unreachable. For all of
                                  the vertices, we are coming from K so they all
                                  need to have the subscript K. Our table now
                                  looks like this:
                                </span>
                              </p>
                              <p>
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/361ff99d-ca0f-4e0e-977d-181e06519adedijk3.GIF"
                                  alt="dijk3"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  We have now completed the first step in the
                                  algorithm. We now need to look along the first
                                  row and select the smallest weighting (apart
                                  from the 0 weighting). The smallest weighting
                                  is 3 for vertex L so we will add L down the
                                  side, copy down the 3<sub>k</sub> and change
                                  its colour, as before, to signify that we have
                                  finished with that vertex.&nbsp;
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Then we need to look at where we can get to
                                  from L. We can get to N. From K, it would take
                                  us 3 to get to L and a further 2 to get to N.
                                  This is smaller than going straight from K,
                                  which had a weighting of 6. We therefore add 5
                                  in the N column and make the subscript L, to
                                  show that it's coming from L. As you can't get
                                  to anywhere else from L, we just copy down the
                                  previous values. Our table now looks like
                                  this:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/b9aa3503-8a85-48b0-a719-eba8e9c6e6a4dijk4.GIF"
                                    alt="dijk4"
                                  />
                                </span>
                              </p>
                              <p>
                                As before, I look for the lowest weighting (but
                                not the ones in purple, which we have finished
                                with). There are two vertices we could use, both
                                with a weighting of 5. We can select any one of
                                them. We will select the first one, M. As
                                before, we add it to the column on the right,
                                copy down its value and change its colour.&nbsp;
                              </p>
                              <p>
                                Then we have to ask where we can get to from M,
                                that has a smaller weighting than we already
                                have discovered.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      To get to N, would be a total weight of 7
                                      from K via M. This is more than we already
                                      have, so we just copy what we already have
                                      down into the next row.
                                    </li>
                                    <li>
                                      From M, we can get to O for a weighting of
                                      6, in addition to the weighting of 5 from
                                      K to M, a total of 11.
                                    </li>
                                    <li>
                                      We can also get to P with a weighting of
                                      3, in addition to the weighting of 5 from
                                      K to M, a total of 8.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        We can also get to Q with a weighting of
                                        7, in addition to the weighting of 5
                                        from K to M, a total of 12.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  We can now go ahead and complete the next row
                                  in the table to get this:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/cd0b0b82-c6bb-4a80-add2-66325bae5c86dijk5.GIF"
                                    alt="dijk5"
                                  />
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  As before, we look for the lowest weighting
                                  (but not the ones in purple, which we have
                                  finished with).
                                </span>
                                &nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  We need to select vertex N. As before, we add
                                  it to the column on the right, copy down its
                                  value and change its colour. From N, the only
                                  place we haven't considered before is to P. To
                                  get to N from K, the lowest weighting is 5,
                                  and then to carry on to P is a further
                                  weighting of 9, a total of 14. This is larger
                                  than the 8 we already have. We therefore just
                                  copy the values down from the row above into
                                  the new row. Our table now looks like this:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/6689fb44-4593-4735-8c3c-58b0a1383cf0dijk6.GIF"
                                    alt="dijk6"
                                  />
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  As before, we look for the lowest weighting
                                  (but not the ones in purple, which we have
                                  finished with).
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  We need to select vertex P. As before, we add
                                  it to the column on the right, copy down its
                                  value and change its colour. We need to see if
                                  there are any weightings from P that are less
                                  than we already have.&nbsp;
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  To get to O from P would be 5 more on top of
                                  the 8 we already have, a total of 13. 13 is
                                  more than the 11 we already have, so we just
                                  copy the 11 down.
                                  <br />
                                  To get to Q from P is an additional 1 on top
                                  of the 8 we already have, a total of 9. This
                                  is less than the 12 we have so we will use 12
                                  instead. Our table now looks like this:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/e8116c78-75b7-48c4-a57c-fd7f098d47a8dijk7.GIF"
                                    alt="dijk7"
                                  />
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  You can now see that the lowest weighting of
                                  the remaining vertices is at Q. As we were
                                  only interested in getting from K to Q we can
                                  stop.
                                </span>
                              </p>
                              <p>
                                Looking at our table, we can see that the lowest
                                weighting to get to Q is 9. To see the shortest
                                path, we have to look at the subscripts on the
                                bottom row and trace them back. The subscript
                                for column Q on the bottom row is P. The
                                subscript for column P on the bottom row is M
                                and the subscript for column M on the bottom row
                                is K, so the path to get the lowest weighting is
                                <strong>K M P Q</strong>.
                              </p>
                              <p>
                                We have now seen how Dijkstra's algorithm works.
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

export default Shortest_path_algorithm___Dijkstra_s_algorithm___how_does_it_work_;
