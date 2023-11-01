import React from "react";

function Traversal_of_trees_depth_first() {
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
                                Traversal of trees, depth first
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Introduction
                                  <br />
                                </strong>
                                There are a number of ways that we can search
                                through a tree to find what we want. Broadly,
                                they split into two approaches, depth first and
                                breadth first. We will consider depth first
                                here. The depth first approach simply means that
                                you go deeper down into the tree before you
                                start backtracking and checking siblings in the
                                tree (sub-trees to one side of the sub-tree you
                                are in). There are three approaches you can use.
                                These are called in-order, pre-order and
                                post-order.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Traversing binary trees and backtracking
                                </strong>
                                <br />
                                When we want to visit a binary tree and look at
                                its nodes, there are three different ways we can
                                do this. These are known as
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>IN-ORDER</li>
                                    <li>PRE-ORDER</li>
                                    <li>POST-ORDER</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>Consider the following binary tree.</p>
                              <p align="center">
                                <img
                                  src="images/bb5d697c-e962-490c-a147-49f4a7d6d10fclip_image003_0000.gif"
                                  alt
                                />
                              </p>
                              <p>
                                If you look at this tree, you should notice that
                                there <em>may</em> be a tree structure under
                                every node. For example, look at the node B.
                                There is a tree structure with B as the root
                                node and nodes underneath it. We can say that a
                                tree may be made up of sub-trees and we can use
                                this property (recursion) to traverse the tree
                                in different ways. We are going to fully explore
                                a sub-tree before
                                <em>
                                  <strong>backtracking</strong>{" "}
                                </em>
                                and exploring other sub-trees.&nbsp;
                              </p>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>Traversing a tree: IN-ORDER</strong>
                                </span>
                                <br />
                                Using this method, we must visit the tree in
                                this order:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the root node.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the right sub-tree.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                How does this work? We visit the
                                <strong>left sub-tree</strong>, then the
                                <strong>node</strong>, then the
                                <strong>right sub-tree</strong>.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      We start at the root, node A.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Underneath node A is the left sub-tree
                                      (with root node B) and the right sub-tree
                                      (with root node C).
                                    </li>
                                    <li class="NormalContentHeading">
                                      We must check the left sub-tree first
                                      according to our INORDER rules. Move to B.
                                    </li>
                                    <li class="NormalContentHeading">
                                      But B has a left sub-tree (with a root at
                                      D) and a right sub-tree (with a root at
                                      E).
                                    </li>
                                    <li class="NormalContentHeading">
                                      We must check the left sub-tree first
                                      according to our INORDER rules. Move to D.
                                    </li>
                                    <li class="NormalContentHeading">
                                      D does not have a left sub-tree, so visit
                                      the node D.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Now check for D’s right sub-tree. It
                                      doesn’t have one.
                                    </li>
                                    <li class="NormalContentHeading">
                                      We have now done the left sub-tree for the
                                      tree that has a root node at B. Now visit
                                      node B.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Now visit the right sub-tree of B. We move
                                      to E.
                                    </li>
                                    <li class="NormalContentHeading">
                                      E doesn’t have a left sub-tree so visit E.
                                    </li>
                                    <li class="NormalContentHeading">
                                      E doesn’t have a right sub-tree so move to
                                      B and because we have now completely
                                      visited the tree with the root node at B,
                                      we move up to node A. Visit node A.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Now visit the right sub-tree of A. We move
                                      to C.
                                    </li>
                                    <li class="NormalContentHeading">
                                      C doesn’t have a left sub-tree so visit C.
                                    </li>
                                    <li class="NormalContentHeading">
                                      C doesn’t have a right sub-tree so move
                                      back up to A.
                                    </li>
                                    <li class="NormalContentHeading">
                                      We have now visited every node.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The order that we visited the nodes was
                                <strong>DBEAC. </strong>We can write an
                                algorithm to print out all of the data at the
                                nodes, like this:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContentHeading">
                                      <strong>
                                        For the current node, check if there is
                                        a left sub-tree. If there is, go to the
                                        root node for this sub-tree and then go
                                        to 2. If there isn’t, go to 3.
                                      </strong>
                                    </li>
                                    <li class="NormalContentHeading">
                                      <strong>Repeat 1.</strong>
                                    </li>
                                    <li class="NormalContentHeading">
                                      <strong>Print the current node.</strong>
                                    </li>
                                    <li class="NormalContentHeading">
                                      <strong>
                                        For the current node, check whether it
                                        has a right sub-tree. If it has go to 5
                                        else go to 6.
                                      </strong>
                                    </li>
                                    <li class="NormalContentHeading">
                                      <strong>Repeat 1.</strong>
                                    </li>
                                    <li class="NormalContentHeading">
                                      <strong>END</strong>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p align="center">
                                This algorithm will take a little bit of
                                thinking about because it is a
                                <strong>recursive algorithm</strong>. Refer back
                                to chapter 10 on recursion. To understand this
                                algorithm, you need to draw a box for each
                                recursive call as we did in chapter 10.
                                <br />
                                <br />
                                <img
                                  src="images/f2304e01-8372-4572-98fa-0f4846aa061312.gif"
                                  alt
                                />
                                <br />
                                &nbsp;&nbsp;
                              </p>
                              <p class="QuestionStyle">
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Traversing a tree: PRE-ORDER
                                  <br />
                                </strong>
                                Using this method, we need to
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      Visit the root node.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the right sub-tree.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Using our previous binary tree, we would visit
                                the nodes in the order:{" "}
                                <strong>A B D E C</strong>. We can write an
                                algorithm that would print out all of the data
                                at the nodes, like this:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContentHeading">
                                      Print the current node.
                                    </li>
                                    <li class="NormalContentHeading">
                                      For the current node, check if there is a
                                      left sub-tree. If there is, go to the root
                                      node for this sub-tree and then go to 1.
                                      If there isn’t, go to 3.
                                    </li>
                                    <li class="NormalContentHeading">
                                      For the current node, check whether it has
                                      a right sub-tree. If it has go to 4. else
                                      go to 5.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Repeat 1.
                                    </li>
                                    <li class="NormalContentHeading">END.</li>
                                  </ol>
                                </li>
                              </ol>
                              <p align="center">
                                <img
                                  src="images/5e30b91b-5a3c-4cdd-995d-4e494d10ae4313.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Traversing a tree: POST-ORDER
                                  <br />
                                </strong>
                                Using this method, we need to
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the right sub-tree.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Visit the root node.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/da9c5ab7-a1e7-4b07-9463-cbead5deeb9bpost.GIF"
                                  alt="post"
                                  width="550"
                                  height="279"
                                />
                              </p>
                              <p>
                                Using our example binary tree, the order that we
                                would visit is: D E B C A
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

export default Traversal_of_trees_depth_first;
