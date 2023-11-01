import React from "react";

function The_CPU_and_the_Fetch_Decode_Execute_cycle() {
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
                                The CPU and the Fetch Decode Execute cycle
                              </h1>

                              <p>
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/44c4da8d-6b73-4821-a219-31f9af6c4503CPU.JPG"
                                  alt="CPU"
                                  width="350"
                                  height="320"
                                />
                                The Central Processing Unit (CPU) is the brain
                                of the computer. It is the component that does
                                all of the clever calculations. It reads the
                                instructions in a program, decides what to do
                                about each instruction and then sends out
                                signals to all of the different pieces of
                                hardware to make things happen. This is quite a
                                complicated idea so we need to produce a model
                                (an abstraction) that we can start working with.
                              </p>
                              <p>
                                Programs are simply sets of instructions that a
                                programmer has written. When you want to 'run' a
                                program, you might double-click on it in a
                                computer system to 'open' it. When we
                                double-click on it, we are sending an
                                instruction to the operating system to go and
                                find the program on the hard drive, copy it and
                                put the copy in RAM. You can see a copy of part
                                of a program on the left. We won't worry about
                                what the instructions all mean. We will just
                                accept that this is what a typical set of
                                program instructions looks like.
                              </p>
                              <p>
                                &nbsp; &nbsp; &nbsp;a) To 'run' a program, the
                                CPU has to get the first instruction in the
                                program.
                                <br />
                                &nbsp; &nbsp; &nbsp;b) It puts the address of
                                the instruction it wants to fetch on the address
                                bus. <br />
                                &nbsp; &nbsp; &nbsp;c) The computer then fetches
                                the instruction given by this address.
                                <br />
                                &nbsp; &nbsp; &nbsp;d) It fetches the
                                instruction by putting it on the data bus.
                                <br />
                                &nbsp; &nbsp; &nbsp;e) The instruction is passed
                                back to the CPU.
                                <br />
                                &nbsp; &nbsp; &nbsp;f) The CPU then 'decodes'
                                the instruction.
                                <br />
                                &nbsp; &nbsp; &nbsp;g) What this simply means,
                                is it decides what to do with the instruction.
                                <br />
                                &nbsp; &nbsp; &nbsp;h) Then, once it has decided
                                what to do, it does it!
                                <br />
                                &nbsp; &nbsp; &nbsp;i) Carrying out an
                                instruction is called 'executing' the
                                instruction.
                                <br />
                                &nbsp; &nbsp; &nbsp;j) The CPU sends out signals
                                to all of the other hardware components so that
                                the instruction is executed.
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                That's it! The CPU has fetched an instruction,
                                decoded it and then executed it. When it has
                                finished one instruction, it does the next one,
                                and the next one and the next one. In fact, this
                                is all the CPU does, all day long.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/affd1cb6-f630-4b30-8f58-1d576e1e5c7cFDE.JPG"
                                  alt="FDE"
                                />
                              </p>
                              <p>
                                <strong>
                                  The register known as the Program Counter
                                </strong>
                                <br />
                                We know that computers have different types of
                                memory. One type of memory is RAM. Another type
                                of memory is the Register. Registers are very
                                fast and they help the CPU carry out this
                                process of FETCH - DECODE - EXCEUTE. One
                                register, for example, is called the Program
                                Counter. You can think of it as a box that holds
                                a number. Its job is to keep track of the{" "}
                                <em>
                                  <strong>next</strong>{" "}
                                </em>
                                address that the CPU must fetch, once the CPU
                                has finished its current instruction (the CPU
                                can only work on one FETCH - DECODE - EXECUTE
                                cycle at a time).
                              </p>
                              <p>
                                For example, if the first instruction to be
                                carried out in a program in RAM was in memory
                                location 2435 (see the diagram above), the
                                operating system puts 2435 into the Program
                                Counter. Now, when the CPU is ready to run the
                                program, it looks in the Program Counter, sees
                                2435 and fetches whatever is at that location.
                                Automatically, once 2435 has been fetched, the
                                Program Counter increases by one, to 2436. When
                                the CPU has finished fetching, decoding and
                                executing the instruction, it simply goes back
                                to the Program Counter, looks at the address in
                                there and repeats the above process, increasing
                                the Program Counter by one every time an
                                instruction has been fetched. This is a very
                                simple but effective way for the CPU to know
                                what to do next. The thing is, the CPU can do
                                all of this really quickly - billions and
                                billions of times a second!!
                              </p>
                              <p>
                                <strong>Q1.</strong>&nbsp;Copy and paste the
                                table into a word processor. Link up the words
                                on the left with the descriptions on the right
                                by drawing lines between them.&nbsp;
                              </p>
                              <table
                                style="
                              margin-top: 10px;
                              margin-bottom: 10px;
                              width: 65%;
                            "
                                border="2"
                              >
                                <tbody>
                                  <tr style="background-color: #ffff99">
                                    <td style="width: 214px; text-align: center">
                                      <strong>Words</strong>
                                    </td>
                                    <td style="width: 83px; text-align: center">
                                      &nbsp;
                                    </td>
                                    <td style="width: 561px; text-align: center">
                                      <strong>Description</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">Decode.</td>
                                    <td>&nbsp;</td>
                                    <td>
                                      The place where you can find programs you
                                      are currently using.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">The CPU.</td>
                                    <td>&nbsp;</td>
                                    <td>The C in CPU.</td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1 Hertz.</td>
                                    <td>&nbsp;</td>
                                    <td>
                                      These are used to send addresses and data
                                      between the CPU and RAM.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      Register.
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                      A mini processor within the main
                                      processor.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      &nbsp;Hard disk.
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                      The place where you can find the address
                                      of the next instruction to fetch.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      &nbsp;Core.
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>The brain of the computer.</td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">Busses.</td>
                                    <td>&nbsp;</td>
                                    <td>
                                      <span style="text-align: center">
                                        The program counter is an example.
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      Program Counter.
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>This comes before 'Execute'.</td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">Central</td>
                                    <td>&nbsp;</td>
                                    <td>
                                      The CPU doesn't work directly with this to
                                      run programs.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">RAM.</td>
                                    <td>&nbsp;</td>
                                    <td>1 cycle every second.</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                <strong>Q2.</strong> Write out as a series of
                                steps how the CPU executes an instruction.
                                <br />
                                <strong>Q3.</strong>
                                What is the maximum number of instructions the
                                CPU work on at any one time?
                                <br />
                                <strong>Q4.</strong>
                                This type of processor design is known as a Von
                                Neumann processor. Use the Internet to find out
                                why.
                                <br />
                                <strong>Q5.</strong> What is the unit used to
                                measure 'cycles per second'?
                                <br />
                                <strong>Q6.</strong>
                                What does a CPU do at the end of a FETCH -
                                DECODE - EXECUTE cycle?
                                <br />
                                <strong>Q7.</strong> Give reasons why some
                                processors can work faster than others.
                              </p>
                              <p>
                                <strong>Extension tasks</strong>
                                <br />
                                <strong>a)</strong>
                                Look up 'pipeline processors'. In what way do
                                they work differently to the Von Neumann
                                processor described here?
                                <br />
                                <strong>b)</strong> Look up 'maths
                                co-processor'. What does one of these do that
                                makes it different to a Von Neumann processor?
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

export default The_CPU_and_the_Fetch_Decode_Execute_cycle;
