import React from "react";

function A_simple_introduction_to_hashing_algorithms() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                A simple introduction to hashing algorithms
                              </h1>
                              <p class="NormalContent">
                                <strong style="line-height: 1.5">
                                  Hash files
                                  <br />
                                </strong>
                                In the three methods of file organisation we
                                have looked at so far, serial, sequential and
                                index sequential, there involves varying degrees
                                of searching through other records to get to the
                                one you want. With a hash file structure, you go
                                straight to the record you want! This is a very
                                fast access method. In a hash file, some search
                                data is entered for the system to use to get
                                back the whole record. You then apply a maths
                                algorithm (or formula) to this search data. This
                                transforms the search data into an address or
                                'hash code'. The computer can then go and get
                                the record! Let's look at an example of this.
                              </p>

                              <div>
                                <p>
                                  <strong>
                                    An example of how hash files work
                                  </strong>
                                  <br />A database of pupils is going to be
                                  organised using a hash file. This file
                                  structure has been chosen because the database
                                  will be used to deal with pupil/parent
                                  enquiries and so needs to retrieve each record
                                  quickly.
                                </p>
                                <p>
                                  The secretary dealing with enquiries will type
                                  in a pupil's surname to get their data back.
                                  The database designer has selected the
                                  following maths formula, known as a ‘hash
                                  algorithm’:
                                </p>
                                <ul>
                                  <li style="list-style-type: none">
                                    <ul style="list-style-type: disc">
                                      <li>
                                        When a surname is typed in, convert each
                                        letter of the surname into a
                                      </li>
                                      <li>
                                        number, and then add the numbers
                                        together to give an address. Convert
                                      </li>
                                      <li>
                                        letters to numbers using A=1, B=2, C=3
                                        ... X=24, Y=25, Z=26.
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                <p>
                                  For example, when the secretary types Jones,
                                  this is converted into 10 + 15 + 14 + 5 + 19 =
                                  63. The computer goes to memory address 63 and
                                  there's the start of the record!
                                </p>
                                <p>
                                  If you wanted to store ‘Jones’ instead, you
                                  would work out the memory address you are
                                  going to store the data in by applying the
                                  hashing algorithm to the data.
                                </p>
                                <p>
                                  This is a much-simplified example but does
                                  illustrate the basic idea. It is a way of
                                  converting a request for a file into an
                                  address, so the record can be retrieved
                                  immediately, without having to go through
                                  other records.
                                </p>
                                <p>
                                  <strong>Good hashing algorithms</strong>
                                  <br />
                                  Creating a hash file is an excellent way of
                                  creating a fast access file structure. You do
                                  need, of course, a direct access storage
                                  device, not a magnetic tape, for example. You
                                  also need to ensure that you have a 'good'
                                  hashing algorithm. The one above is very poor
                                  indeed because there will be lots of different
                                  surnames that give the same memory address!
                                  This is called a 'clash' or 'collision'. You
                                  need to design a hashing algorithm that
                                  minimises clashes because they slow down
                                  access times. On the other hand, an algorithm
                                  might also spread out the data so much that
                                  large areas of storage are used up! Having
                                  large areas of storage that aren't used
                                  efficiently is known as ‘redundancy’. A
                                  further consideration is the hashing algorithm
                                  itself. It mustn’t be so complicated that it
                                  takes ages to calculate anything!
                                </p>
                                <p>A good hashing algorithm will:</p>
                                <ul>
                                  <li style="list-style-type: none">
                                    <ul style="list-style-type: disc">
                                      <li>Minimise clashes.</li>
                                      <li>
                                        Ensure that the hash codes of data
                                        aren't spread too far apart, wasting
                                        memory.
                                      </li>
                                      <li>Be quick to calculate.</li>
                                    </ul>
                                  </li>
                                </ul>
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
    </div>
  );
}

export default A_simple_introduction_to_hashing_algorithms;
