import React from "react";

function Queues() {
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
                              <h1 style="text-align: center">Queues</h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  How a queue works
                                </strong>
                                <br />
                                Consider a supermarket. The first person to
                                arrive at a checkout is first in the queue! Then
                                a second person arrives and they are second in
                                the queue. Then a third person arrives and they
                                are third in the queue and so on. Of course,
                                people are also leaving the queue as well. When
                                someone leaves, they leave from the front of the
                                queue. The first person into the queue is the
                                first person out of the queue. This kind of data
                                structure is known as a FIFO, or First In First
                                Out structure.
                              </p>

                              <p align="center">
                                <br />
                                &nbsp;
                                <img
                                  src="images/145463c6-9ed3-460c-a110-c4bb872eb66aa.gif"
                                  alt="queue"
                                />
                              </p>
                              <p>
                                If the first person in the queue leaves, then
                                the front of the queue is now at the second
                                person! You can find out where the front of the
                                queue is by using a pointer to the front of the
                                queue. You can also keep track of where the back
                                of the queue is by using a pointer there, too.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  An example of a queue
                                </strong>
                                <br />
                                We will set up an array with 6 elements. Within
                                this array, we will set up our queue. We will
                                have a pointer called FRONT to point to the
                                memory location where the front of the queue can
                                be found, and a pointer called END, to point to
                                the END of the queue. These will in fact simply
                                be variables called FRONT and END. Note that the
                                queue itself is a dynamic data structure because
                                it grows and shrinks in size, but it is confined
                                within an array - a static data structure, a
                                fixed size! This may seem a contradiction
                                because you are losing all the benefits of a
                                dynamic structure by placing it within a static
                                structure. However, it is the
                                <strong>processing of the data</strong> itself
                                in a queue that is most important so we will
                                conveniently 'overlook' this anomaly for now! We
                                will visualise the queue with the front of the
                                queue at the bottom of the following
                                diagrams.&nbsp;There is of course nothing
                                stopping us having 1 row and 6 columns to show
                                the queue. Different books will show a queue in
                                different ways. We will see an example of this
                                second method of visualising a queue in the
                                section on stacks shortly.&nbsp;
                              </p>
                              <p>
                                <strong>Step 1:</strong> The queue is empty.
                                FRONT=0, END=0
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 2: </strong>John joins the queue,
                                then Zubair comes along and joins the queue.
                                Finally, Mandy joins the queue. FRONT=1, END=3
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Mandy</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Zubair</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>John</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 3: </strong>Sam joins the queue (at
                                END+1 memory location) and John leaves the
                                queue. FRONT=2, END=4
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sam</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Mandy</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Zubair</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 4:</strong> Larry joins the queue
                                and Zubair then Mandy leave the queue. FRONT=4,
                                END=5
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Larry</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sam</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 5: </strong>Fred joins the queue.
                                FRONT=4, END=6
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Fred</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Larry</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sam</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                When the END pointer points to the very end of
                                the array, there appears to be a problem - how
                                can we add another piece of data, Emma? There is
                                free space in the array, just not at the end!
                                Actually, it presents no problem! When the END
                                pointer points to the end of the array AND the
                                FRONT pointer isn't at the front of the array,
                                it means there is space. We put the new data in
                                to the front of the array, and adjust the END
                                pointer accordingly. It doesn't matter that the
                                END is in front of the FRONT pointer!
                              </p>
                              <p>
                                <strong>Step 6: </strong>Emma joins the queue.
                                FRONT=4, END=1
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Fred</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Larry</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sam</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Emma</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 7: </strong>Sam leaves the queue
                                and Ali joins the queue. FRONT=5, END=2
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Fred</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Larry</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Ali</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Emma</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                This kind of queue is known as a ‘circular
                                queue’ because the FRONT and END pointers go
                                around in circles! It ensures that free space
                                made available at the front of the queue when a
                                data item is removed can be re-used.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  A classic application of a queue structure
                                </strong>
                                <br />A classic application of a queue structure
                                is in the management of print jobs on a network.
                                If 6 people on a network all send their work to
                                be printed, their print jobs are intercepted in
                                the order they are sent by a special program
                                called a ‘spooler’. This program's function is
                                to store each of the data in each print job in a
                                queue. It then sends each job to the printer in
                                a ‘First In First Out’ manner. (Using a spooler
                                program ensures that a user can use their
                                computer quickly after they have sent a file to
                                be printed because the spooler is in charge of
                                printing rather than the individual's computer).
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

export default Queues;
