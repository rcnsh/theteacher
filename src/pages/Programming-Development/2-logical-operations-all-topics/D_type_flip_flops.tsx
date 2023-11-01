import React from "react";

function D_type_flip_flops() {
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
                                D type flip flops
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                A flip-flop (sometimes called a 'latch') in
                                logic gate diagrams is a design that can be used
                                to store a single bit of information, either a
                                one or a zero. You can flip over this stored
                                information (from 1 to 0 or from 0 to 1) by
                                applying an input signal and flip back again by
                                applying another input signal but the
                                output&nbsp;
                                <strong>
                                  <em>only ever changes</em>
                                </strong>
                                if there is a rising clock edge - we will
                                discuss what that means in much more detail
                                below. It cannot change at other times in a
                                clock cycle. This is where the design gets its
                                name from. It is a fundamental component in the
                                design of anything digital, such as computers
                                and digital communications. There are a number
                                of different flip-flop designs but the only one
                                on the OCR syllabus is the D type flip-flop.
                              </p>

                              <p class="NormalContent">
                                The D type flip-flop has 2 inputs and 2 outputs.
                                We can represent one using this logic symbol:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/4bc5a647-d9d3-448a-84dc-0e6da476d9cadlogic.GIF"
                                  alt="dlogic"
                                />
                              </p>
                              <p>
                                The first input is the data signal, which we use
                                when we want to change the output Q. The second
                                input is the signal from a clock. You can think
                                of the clock as a never-ending series of digital
                                pulses that look like this:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/4c766388-e9d0-4c28-a9ec-bbd08274c56dclock.GIF"
                                  alt="clock"
                                />
                                <br />
                                Each pulse of the clock has a rising edge:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/17b427bd-94fe-47ca-bbba-f26e8b84ffe2risingedge.GIF"
                                  alt="risingedge"
                                />
                                <br />
                                and a falling edge:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/153cc764-5329-4249-9f55-162aa6b88aa1fallingedge.GIF"
                                  alt="fallingedge"
                                />
                              </p>
                              <p>
                                There are two outputs. We will call it Q and it
                                is either a 0 or a 1. We will call the other
                                output Q-bar and we usually represent it as a Q
                                with a bar over it. It always holds the opposite
                                value to whatever is in Q.
                              </p>
                              <p>
                                <strong>How does the D flip-flop work?</strong>
                                <br />
                                The first thing to know is that the output Q
                                always takes on whatever state the Data signal D
                                is in, but only when the clock is on a rising
                                edge. So if the input data signal is a 0 and the
                                clock is on a rising edge, then Q is 0. If the
                                input data signal is a 1 and the clock is on a
                                rising edge, then Q is 1. This is where the
                                flip-flop gets its name from; the output Q takes
                                its value from the input D and then it delays it
                                for one clock cycle, until the next rising edge.
                                At any other time in the clock cycle, the value
                                of Q holds whatever value it previously had. If
                                that sounds complicated, then a truth table
                                might help!
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/44ebc331-c0a0-4ecd-95b0-872e3bc16a25dtruth.GIF"
                                  alt="dtruth"
                                />
                              </p>
                              <p>
                                Even the truth table can be a little bit
                                confusing. If we look at what is called a
                                'timing diagram', we might be able to see
                                exactly how this functions.
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/01857bdc-08b1-4cb5-acc6-59e3843c87bfdtypetiming.GIF"
                                  alt="dtypetiming"
                                  width="800"
                                  height="277"
                                />
                              </p>
                              <p>
                                As you can see, the output Q starts off at 0. At
                                X<sub>1</sub>, the clock is on a rising edge and
                                because the Data is a 1, Q becomes 1. It stays
                                at a 1 until X<sub>2</sub>, when it changes to a
                                0 because the clock is on a rising edge and the
                                Data signal is a 0. At X<sub>3</sub>, Q becomes
                                a 1 because there is a rising edge and the data
                                signal is a 1. Note that we haven't shown what
                                Q-bar is. If you remember from our earlier
                                description, it is the exact opposite of
                                whatever Q is!&nbsp;We can implement the D type
                                flip-flop using 4 NAND gates and a NOT gate,
                                like this:
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/5bab73d3-2211-4c5e-9b6a-97f9f29b47c8dflipflop.GIF"
                                  alt="dflipflop"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
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

export default D_type_flip_flops;
