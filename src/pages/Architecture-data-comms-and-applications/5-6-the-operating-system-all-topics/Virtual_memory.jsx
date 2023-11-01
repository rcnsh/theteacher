import React from "react";

function Virtual_memory() {
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
                              <h1 style="text-align: center">Virtual memory</h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Virtual memory
                                  <br />
                                </strong>
                                Your computer has some Immediate Access Store
                                (known also as IAS but you may also know it as
                                RAM – the terms are used interchangeably). This
                                is a fixed size although you can of course go
                                out and buy some more! For example, you may have
                                128 Mbytes of RAM and you could upgrade this to
                                512 Mbytes. IAS is used to store the programs
                                and data that you
                                <em>currently</em> need to use (as opposed to
                                secondary storage devices such as the hard disk,
                                CD-ROM or floppy disk, which are used to store
                                applications and data that you may use in the
                                future but don’t need now).
                              </p>

                              <p>
                                When you want to use some applications or want
                                to work on a file, you typically double-click on
                                it. It is then transferred by the operating
                                system from a secondary storage device into the
                                IAS. The operating system has a piece of
                                software called a ‘<strong>loader</strong>’ that
                                is responsible for:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Transferring an application or file into
                                      an appropriate place in the primary
                                      memory.
                                    </li>
                                    <li>
                                      <span style="line-height: 1.5">
                                        Adjusting any references to RAM
                                        addresses that have been made in a
                                        program. For example, if you have an
                                        instruction that says “Get data from RAM
                                        location 1000 000” and the operating
                                        system has used that location for
                                        another program instead of a data file,
                                        then the loader will have to adjust the
                                        reference so it is looking at a
                                        different (but correct) RAM location.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                If you are multi-tasking, however, then you may
                                have a number of applications and a number of
                                files open (i.e. in the IAS) at the same time.
                                There is a potential problem here for the
                                loader. These applications and files may
                                interfere with each other and the loader must
                                ensure that they don’t! They all need to be in
                                RAM but each one is in danger of overwriting the
                                RAM locations of other applications and files!
                                For example, consider the following. A computer
                                with 32 Mbytes of RAM has an operating system
                                and a virus checker running (in RAM). Let us
                                assume that the operating system is in memory
                                locations 0 Mbytes up to address 20 Million. The
                                virus checker starts at 20 Mbytes and goes up to
                                address 25 Million. We can represent this as:
                              </p>
                              <p align="left">
                                <img
                                  src="images/95fdfb88-b5b5-4ba2-a8f5-232bba9aa281a.gif"
                                  alt
                                />
                              </p>
                              <p>
                                If the user then double clicks on some word
                                processing software and opens some files (let’s
                                assume that this take 4 Mbytes of RAM), the
                                application and the data must be put somewhere
                                after 25 Mbytes. If they are put, e.g. from
                                address 18 Million onwards then the Virus
                                checker software would be overwritten (and
                                wouldn’t therefore work) and some of the
                                operating system would be overwritten (which may
                                cause the computer to crash). Deciding how the
                                RAM is to be used for all of the different
                                applications and data is known as
                                <strong>memory management</strong> and is an
                                important role of the operating system. Our RAM
                                now looks like this:
                              </p>
                              <p align="left">
                                <img
                                  src="images/e734d60a-1e77-4fe7-96fe-eb836c446ec7b.gif"
                                  alt
                                />
                              </p>
                              <p>
                                Now suppose the user opens another application
                                as well as the word processor. Suppose the user
                                opens a spreadsheet that needs 5 Mbytes. The
                                operating system puts it at the start of the
                                free space, at address 29 Million – but then
                                realises that there isn’t enough RAM to fit the
                                whole application in!! You may think that the
                                computer might crash or at the very least
                                produce an error message. However, the computer
                                has a memory management trick up its sleeve. It
                                uses some ‘pretend RAM’ by ‘converting’
                                temporarily some of the unused space available
                                on the hard disk. The proper name for hard disk
                                space being used like RAM is ‘virtual memory’.
                              </p>
                              <p>
                                How can more than one program be running in
                                memory at the same time, even though there isn't
                                enough primary memory to run both programs? The
                                operating system relies on ‘virtual memory’. It
                                relies on the fact that, even if you have 5
                                applications open at the same time, only one of
                                them is ‘active’, or being serviced by the CPU,
                                at any one time. In addition, you often don’t
                                actually need the entire code for an application
                                in RAM at any one moment. For example, if you
                                are not using some clipart that comes with a
                                word processing application, then the clipart
                                doesn’t need to be in RAM, although if you do
                                start using it then it must be moved into RAM.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      All programs are split up into equal
                                      lengths by the operating system. These
                                      equal lengths are known as pages. A page
                                      might be 32 Kbytes long, for example.
                                    </li>
                                    <li>
                                      The RAM is also split up into pages.
                                    </li>
                                    <li>
                                      The computer keeps as many pages as it can
                                      in RAM, especially those needed to run the
                                      active application. In the above example,
                                      if the word processing software was
                                      active, then the operating system, the
                                      virus checker, all of the word processing
                                      application and 3 Mbytes of the
                                      spreadsheet software would be kept in RAM.
                                    </li>
                                    <li>
                                      The remaining 2 Mbytes of the spreadsheet
                                      software can’t fit into RAM and would be
                                      stored, in page-size blocks, in virtual
                                      memory, on backing storage (the hard disk)
                                      in an area called the page file. In
                                      Windows, this is also known as the swap
                                      file.
                                    </li>
                                    <li>
                                      When you switch from the word processor to
                                      the spreadsheet, so that the spreadsheet
                                      is the active application, what happens?
                                    </li>
                                    <li>
                                      The CPU moves out of RAM and on to the
                                      hard disk some of the pages that it
                                      doesn't need for a while, (in this case
                                      some of the word processing pages) and
                                      then moves from the backing storage into
                                      RAM those spreadsheet pages which it now
                                      does need!
                                    </li>
                                    <li>
                                      This takes a little bit of time - the hard
                                      disk is very slow compared to the CPU.
                                      Have you ever noticed when you are
                                      multitasking that it can take a little
                                      while (sometimes ages) before you can
                                      actually access your computer when you
                                      switch between applications?
                                    </li>
                                    <li>
                                      When the pages have been swapped, you can
                                      then start using the spreadsheet.
                                    </li>
                                    <li>
                                      If you swap back again, the above process
                                      is repeated.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                What you are doing here is to use a little part
                                of your hard disk as a sort of (slow) RAM.
                                Because this part of your hard disk is being
                                used like real memory, but isn't actually
                                memory, it is known as ‘virtual memory’.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Problems and solutions
                                </strong>
                                <br />
                                Virtual memory allows a user to have and use
                                apparently more RAM than is actually available.
                                There are problems, however.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      As has already been highlighted, swapping
                                      pages in and out of the hard disk takes
                                      time! ‘disk threshing’ (or thrashing your
                                      hard disk) as it is known, causes the
                                      computer to work slowly. The more memory
                                      you have, however, the more pages you can
                                      keep in it and the less swapping you need
                                      to do! Ideally, you want to have enough
                                      RAM to run applications without using
                                      virtual memory. In the example above, we
                                      only needed 3 Mbytes of virtual memory, so
                                      it would have been unlikely to slow down
                                      the computer too much. Imagine if we had
                                      200 Mbytes of applications and only 32
                                      Mbytes of RAM!! You would recommend a user
                                      in this situation to go out and buy some
                                      more RAM, quickly!
                                    </li>
                                    <li>
                                      You should run a ‘defragmentation utility’
                                      regularly on your computer's hard disk. As
                                      you use a hard disk, files get split up
                                      and stored increasingly all over the hard
                                      disk. This might eventually mean that
                                      pages used in virtual memory can't be
                                      stored together. To access pages that are
                                      all over a hard disk is slower than
                                      accessing pages that are all together.
                                      Running Defrag regularly will keep your
                                      hard disk working at its optimum
                                      performance.
                                    </li>
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
  );
}

export default Virtual_memory;
