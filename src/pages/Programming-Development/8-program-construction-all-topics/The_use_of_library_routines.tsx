import React from "react";

function The_use_of_library_routines() {
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
                                The use of library routines
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                With so many people writing programs, it seems
                                very likely that the same code will potentially
                                be written again and again to do the same thing,
                                e.g. send a file to a printer or to sort a file
                                into alphabetical order. It takes a long time to
                                develop code and prove that it works. To get
                                round this problem, programmers build up
                                libraries of functions and procedures over time.
                                If they need a routine that has been written
                                before, they can just go and get it; they don't
                                have to write the routine from scratch.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Libraries
                                  </span>
                                </strong>
                                <br />A library simply contains pre-written and
                                pre-tested and proven procedures and functions.
                                They may be libraries that a programmer builds
                                up, or a library a company builds up or indeed a
                                commercial library that someone has paid for.
                                You can even get libraries off the Internet, or
                                at least get functions and procedures and set up
                                your own library. Libraries will typically be
                                stored pre-compiled.
                              </p>
                              <p>
                                <strong>
                                  What is a Dynamically Linked Library (DLL)?
                                </strong>
                                <br />A DLL is a collection of executable
                                programs. These provide functions that can be
                                called and used by Windows-based applications.
                                An application that wants to use a particular
                                function needs to create a link to the DLL. If
                                the DLL is missing, then a message will pop up
                                saying that it ‘cannot find XXX.dll’ or ‘call to
                                undefined dynalink’. This can also happen if a
                                program is trying to call a DLL that is not
                                compatible with the operating system. This might
                                happen because the DLL being called is too old
                                for that latest operating system you have
                                recently upgraded your computer to!! If this
                                happens, you will need to locate the correct DLL
                                on the Internet and install it. There are lots
                                of sites that you can go to and download the DLL
                                you need.
                              </p>
                              <p>
                                Device drivers are sometimes packaged as DLL
                                files. (A computer needs a Device driver if it
                                wants to communicate with a peripheral such as a
                                printer or a scanner). The system of having
                                Dynamically Linked Libraries stored on the hard
                                drive means that they do not have to be loaded
                                into RAM until the point that they are needed.
                                If you wanted to print a document, for example,
                                then your application, for example, Word, would
                                load the DLL only when you actually wanted to
                                print something out. This saves space in RAM.
                                Not only that but it also means that any
                                Windows-based program can simply call the DLL.
                                The developers of a new Windows-based
                                application don’t have to re-write the DLL or
                                some other code for printing, for example. By
                                using existing DLLs, the developers are:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Saving space on the hard drive.</li>
                                    <li>
                                      Ensuring RAM is used as efficiently as
                                      possible.
                                    </li>
                                    <li>Saving time in development costs.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The ability to reuse modules of code is one of
                                the benefits of modular programming. You can
                                find out a lot more about DLL files by searching
                                for What is a DLL in Google.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Linkers and loaders
                                  </span>
                                </strong>
                                <br />
                                If a programmer needs to use a routine in a
                                library, they simply refer to the library in
                                their program (sometimes telling the program
                                where the library is). A utility program called
                                a loader then gets the routine and loads into
                                into the main memory. A second utility program
                                called a linker then links it into the main
                                program, making any adjustments e.g. to memory
                                references as necessary.
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

export default The_use_of_library_routines;
