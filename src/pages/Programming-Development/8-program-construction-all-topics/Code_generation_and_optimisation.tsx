import React from "react";

function Code_generation_and_optimisation() {
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
                                Code generation
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Code generation
                                </strong>
                                <br />A high level language is first LEXICALLY
                                analysed. Then its SYNTAX is analysed. During
                                syntax analysis, the SEMANTICS of the code is
                                checked to see if it makes sense. If any errors
                                are found in these stages the REPORT GENERATOR
                                program springs into action and displays helpful
                                (or not so helpful) error messages. The
                                programmer uses these to aid debugging the
                                program. This is known as ‘translator
                                diagnostics’. When the program can be lexically
                                and syntactically analysed without errors, the
                                object code can be generated.
                              </p>

                              <p>
                                Consider the
                                line:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>
                                  LENGTH := 2 * (FIRST - SECOND) + 4 * (THIRD -
                                  FOURTH)
                                </strong>
                              </p>
                              <p>
                                During lexical analysis, a look-up table will
                                have been created of all the variables found in
                                the source code, their data type and where in
                                memory the variable value can be found. For
                                example;
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">
                                          <strong>Name</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">
                                          <strong>Type </strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">
                                          <strong>Address</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">LENGTH</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">INT</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">FFB2</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">FIRST</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">INT</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">1445</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">SECOND</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">INT</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">A4A3</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">THIRD</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">INT</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">FF21</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="76">
                                        <p align="center">FOURTH</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">INT</p>
                                      </td>
                                      <td valign="top" width="76">
                                        <p align="center">C411</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                Also, library routines may need to be called up
                                and referenced. In Pascal, for example, you
                                would call the library known as CRT to enable
                                you to use the ‘Clear the screen’ routine.
                                <strong>
                                  <span style="text-decoration: underline">
                                    &nbsp;
                                  </span>
                                </strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  What happens during code generation?
                                </strong>
                                <br />
                                The computer needs to generate machine code from
                                the high-level language. The way the line
                              </p>
                              <p align="center">
                                <strong>
                                  LENGTH := 2 * (FIRST - SECOND) + 4 * (THIRD -
                                  FOURTH)
                                </strong>
                              </p>
                              <p>
                                is written follows maths rules that humans can
                                follow. Computers don't work like that! The line
                                needs to be rearranged so that the computer can
                                figure out what to add, subtract and multiply
                                and in what order. The most complicated
                                instruction in programming can be broken down
                                into a series of 'baby steps'. One way to
                                represent how the computer will work on each
                                instruction is to create a tree structure to
                                represent each phrase of code. For example,
                                using the example instruction above, the
                                instruction could be represented as a diagram:
                              </p>
                              <p align="center">
                                <img
                                  src="images/4b0f08e5-bc64-4193-978d-9a6032b0658da.gif"
                                  alt="code_gen"
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The computer will start at level 1. Any
                                      variables used can be substituted with the
                                      variable address kept in the look-up table
                                      and any library routines can be called by
                                      using the routine's address. How routines
                                      and procedures all work together is the
                                      job of the ‘linker’. Where the program is
                                      put into memory is the job of the
                                      ‘loader’.
                                    </li>
                                    <li>
                                      At level two, you can see that 'First'
                                      minus 'Second' will generate some code.
                                      Also, 'Third' minus 'Fourth' will generate
                                      code. These will be passed up to the next
                                      level.
                                    </li>
                                    <li>
                                      The code generated by 'First' minus
                                      'Second' will be multiplied by 2. The code
                                      generated by 'Third' minus 'Fourth' will
                                      be multiplied by 4. The code will then be
                                      passed up to the next level.
                                    </li>
                                    <li>
                                      The two lots of code generated so far will
                                      be added together and passed up to the
                                      final level, level 5. The code generated
                                      so far will be assigned to 'Length'.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The original instruction was broken down into a
                                series of 'baby steps' that were then carried
                                out by the computer. The code for each step was
                                recombined with the code generated by other
                                steps, until the code for the whole instruction
                                had been written.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Code optimisation
                                </strong>
                                <br />
                                The generation of code proceeds along the lines
                                described above for each instruction until the
                                whole program has been turned into object code.
                                It can then be run on the computer, or
                                distributed to users to use on their computers.
                                Code generated using this method may not be the
                                most efficient code that could be generated. For
                                example, when a tree is produced, you may get:
                              </p>
                              <p>
                                <strong>
                                  VALUE:=RESULT*1
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                or you may get another
                                example:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  x:=y+0
                                </strong>
                              </p>
                              <p>
                                Clearly, <strong>VALUE:=RESULT*1</strong> is the
                                same as <strong>VALUE:=RESULT, </strong>and
                                <strong>x:=y+0</strong> is the same as
                                <strong>x:=y</strong>
                              </p>
                              <p>
                                These examples, then, show that the code
                                generation program could produce inefficient
                                code! The code must be optimised! When the
                                compiler has generated the object code, it runs
                                routines that do just this. It tries to make the
                                code as fast and as efficient as possible by
                                finding and removing unnecessary code.
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

export default Code_generation_and_optimisation;
