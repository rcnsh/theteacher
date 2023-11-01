import React from "react";

function Linkers_and_loaders() {
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
                                Linkers and loaders
                              </h1>
                              <p>
                                <strong>Linkers</strong>
                                <br />A linker is a program that allows a user
                                to link library programs or separate modules of
                                code into their own programs. It is used to
                                combine different modules of object code into
                                one single executable code program. This may
                                involve combining a program with library
                                programs, or involve recombining blocks of
                                object code from the same program, or a mixture
                                of both.
                              </p>

                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>A program may call library modules.</li>
                                    <li>
                                      Library modules will use data stored in
                                      ‘relative addresses’. See the section
                                      below on loaders for more about relative
                                      addressing.
                                    </li>
                                    <li>The program itself is compiled.</li>
                                    <li>The library modules are compiled.</li>
                                    <li>The linker program is run.</li>
                                    <li>
                                      The compiled library modules are linked to
                                      (connected to) the compiled program.
                                    </li>
                                    <li>
                                      Base addresses used in the library modules
                                      are adjusted so that the calls in them to
                                      data work from within the main program.
                                    </li>
                                    <li>One executable program is produced.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Linkers are also used when a user has to compile
                                a big program in sections, perhaps because there
                                is a shortage of RAM. The user's program is
                                split up into sections and held on backing
                                storage. Each section is then brought into RAM,
                                one section at a time, from backing storage and
                                compiled into object code. Each block of object
                                code is then saved back to the backing storage.
                                When the whole program is compiled, the compiler
                                can be removed from RAM and all of the blocks of
                                object code can then be brought into RAM because
                                there is enough space without the compiler
                                program. The linker program is used to recombine
                                the blocks of object code in RAM to get a
                                working full program.
                              </p>
                              <p>
                                <strong>Loaders</strong>
                                <br />A loader is a piece of software that
                                chooses exactly where to put object code in RAM,
                                ready for it to be run. It also adjusts the
                                memory references in programs. These pieces of
                                software are explained in more detail below.
                              </p>
                              <p>
                                The job of a piece of software known as a loader
                                is to take the object code generated by
                                compilation and to find a 'good' place for it in
                                RAM, where it can then be executed. Imagine that
                                a software house has written a program to sell
                                to the public. They wrote the source code,
                                compiled it so that they then had some object
                                code, and then copied the object code onto a CD,
                                ready to sell. They wouldn't distribute the
                                source code because they would want to keep the
                                actual program code secret from competitors - it
                                is practically impossible to turn object code
                                back into source code. Besides, your customers
                                may not have the necessary compilers on their
                                machines to convert the source code into object
                                code. In addition, it would be a little
                                inconvenient if your customers had to compile
                                every program they wanted to use before they
                                actually used it!
                              </p>
                              <p>
                                If you bought the CD and wanted to run the
                                program, you might double click on the .exe
                                file. The loader would then copy the object code
                                from the CD into your RAM and run it from there.
                                But where in RAM would the loader put it? You
                                have other applications running in RAM, for
                                example, the operating system and a virus
                                checker. You may also be multi-tasking, with
                                various programs and data in RAM. If the loader
                                is not careful, it will load a program in a
                                place in RAM that interferes with other
                                programs. Your loader program, then, must decide
                                where to put the object code in RAM so that it
                                doesn't interfere with other programs and data.
                                This is the first main job of the loader
                                program.
                              </p>
                              <p>
                                The second main job involves adjusting
                                references that are used within a program.
                                Programs can be written by programmers using
                                either ‘absolute addressing’ or ‘relative
                                addressing’. Relative addressing is more common
                                because then the loader can put the program
                                anywhere in RAM - absolute addressing isn't
                                flexible.
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

export default Linkers_and_loaders;
