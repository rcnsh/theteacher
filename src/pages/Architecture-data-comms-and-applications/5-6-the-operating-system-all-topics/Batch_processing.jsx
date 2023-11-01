import React from "react";

function Batch_processing() {
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
                                Batch processing
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Computers cost a lot of money. The equipment
                                costs money and the infrastructure that ensures
                                they are always working such as employing a
                                network manager, for example, costs money.
                                Because of the high costs involved, computer
                                designers and software designers spend a lot of
                                time making sure that computers can do jobs
                                efficiently. They try to ensure that computer
                                time is used as wisely as possible. One result
                                of this is that there is now a wide range of
                                types of operating system.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Batch processing - in the beginning...
                                  </span>
                                </strong>
                                <br />
                                In the early days of computers, operating
                                systems were very basic. If a person wanted to
                                use a computer for something (a 'job') they
                                would need to load their program into the
                                computer and then load up the computer with the
                                input data. The input data might be held in a
                                coded form on punched cards. When both the
                                program had been loaded up and the punched cards
                                put into the input device, the program would be
                                'executed'. The program would read the data,
                                process it and then send the output to a
                                printer. When the job had been finished, the
                                next person could use the computer. This
                                changeover wasted a lot of the CPU's time. The
                                CPU is a very fast device. If it has to wait
                                while data is read into it or while data is sent
                                out of it, then it won't be working to its full
                                capacity. This problem is sometimes referred to
                                as a '<strong>speed mismatch</strong>' problem.
                                We have seen how buffers help overcome the
                                problem of speed mismatch and we will meet this
                                problem again later.
                              </p>
                              <center>
                                <img
                                  src="images/227b8887-d2c2-4ecf-84c2-3af2d4cd5003a.gif"
                                  alt="Batch"
                                />
                              </center>
                              <p class="NormalContent" align="left">
                                To improve the situation, a new input device was
                                designed that could hold lots of punched cards.
                                Similar jobs were collected together and put
                                into a 'batch'. It was possible to stack all of
                                the input cards together for one batch process,
                                and then also have some other input cards
                                collected together for a different batch
                                process. Of course, if you were going to put
                                lots of jobs together into a batch, and have
                                lots of batches together, then there needed to
                                be a way of managing and coordinating these
                                different processes. An operator, therefore,
                                needed to also write some instructions to do
                                just that. The program was written using a
                                <strong class="intext">
                                  Job Control Language
                                </strong>
                                (JCL). A JCL program would specify such things
                                as:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      When to start processing the batch.
                                    </li>
                                    <li class="NormalContent">
                                      Which program to use with which punched
                                      cards.
                                    </li>
                                    <li class="NormalContent">
                                      What printer to use for the output or what
                                      file to write the output to.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span class="NormalContent">
                                  Batch processing improved matters because this
                                  type of processing ensured that the CPU was
                                  being used as efficiently as possible - it
                                  wasn't waiting around so much while an
                                  operator regularly loaded in programs and
                                  data. Although batch processing systems have
                                  their roots in systems developed many years
                                  ago, they are still much in evidence today.{" "}
                                  <br />
                                </span>
                              </p>
                              <center>
                                <img
                                  src="images/5886faf8-6586-410a-beb4-c953f017480db.gif"
                                  alt="Collect jobs together"
                                />
                              </center>
                              <p>
                                <span class="NormalContent">
                                  <br />{" "}
                                </span>
                                <strong>
                                  <span class="NormalContentHeading">
                                    An example of batch processing today
                                  </span>
                                  <span class="NormalContent">
                                    <br />{" "}
                                  </span>
                                </strong>
                                <span class="NormalContent">
                                  Although the origins of batch processing are
                                  from many decades ago, the principles are
                                  still being employed today in a wide range of
                                  applications. Consider the example of an
                                  Internet bank. At the end of every month it
                                  might prepare everyone's bank statements and
                                  then email all of their customers, telling
                                  them that their statements were ready.
                                </span>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Batch processing involves many jobs, in
                                      this example, many statements that need
                                      processing.
                                    </li>
                                    <li class="NormalContent">
                                      The jobs are all similar in nature. Each
                                      statement is processed in broadly the same
                                      way.
                                    </li>
                                    <li class="NormalContent">
                                      A JCL program is written, telling the
                                      computer what files to use, when to start
                                      the processing, what to do with the output
                                      and so on.
                                    </li>
                                    <li class="NormalContent">
                                      Some instructions in the JCL program tell
                                      the computer to process the statements at
                                      a time when the network's resources are
                                      not needed for other, more important
                                      things. For example, the processing
                                      doesn't begin at 9.00am on Monday morning,
                                      but 1.00am Sunday morning.
                                    </li>
                                    <li class="NormalContent">
                                      The processing begins. The output is not
                                      immediate - the processing might take
                                      hours. If it were really important to have
                                      the results of the processing immediately,
                                      batch processing wouldn't have been
                                      selected.
                                    </li>
                                    <li class="NormalContent">
                                      Once the JCL has been written and loaded,
                                      it takes over the management of the batch
                                      processing. Once the job starts, there is
                                      no human intervention necessary in the
                                      process.
                                    </li>
                                    <li class="NormalContent">
                                      There is no physical output in this
                                      particular case - the output is in the
                                      form of updated statements held in
                                      electronic form and prepared emails.
                                    </li>
                                    <li class="NormalContent">
                                      Once the processing starts, it continues
                                      uninterrupted until it is finished.
                                    </li>
                                    <li class="NormalContent">
                                      At a later time, when the computers are
                                      free, the file containing emails is
                                      accessed and all emails are sent.
                                    </li>
                                    <li class="NormalContent">
                                      When a customer receives an email telling
                                      them that their statement is ready, they
                                      can log in to their account. They will
                                      then be able to access and print off their
                                      statement.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Batch processing, then, is a way of improving
                                the efficiency of a computer or network's
                                resources by bringing together similar work and
                                processing them all in one go at a time when
                                resources aren't needed. One of the main things
                                to remember is that the output from a batch
                                processing run isn't immediate. Summarising the
                                key points about batch processing, we can
                                observe the following:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/73b72ed3-2616-4ac5-b14a-408f19814839c.gif"
                                  alt="Advantages"
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Jobs are collected together over a period
                                      of time.
                                    </li>
                                    <li class="NormalContent">
                                      Jobs are processed altogether in one go,
                                      at the same time.
                                    </li>
                                    <li class="NormalContent">
                                      It is not important that the output is
                                      available immediately.
                                    </li>
                                    <li class="NormalContent">
                                      It is worth noting that when a group of
                                      jobs are collected together in a batch,
                                      they are often batch processed in the
                                      middle of the night, using the
                                      organisation's computing power and
                                      printers when nobody else needs them.
                                    </li>
                                    <li class="NormalContent">
                                      The jobs can be set up to be batch
                                      processed because it is possible to write
                                      a little program using a Job Control
                                      Language that manages the work to be done.
                                    </li>
                                    <li class="NormalContent">
                                      Because the JCL takes over and manages the
                                      batch processing, once it starts, no
                                      further human intervention is required.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="QuestionStyle">
                                <strong style="line-height: 1.5">
                                  <span class="NormalContentHeading">
                                    Speed mismatch problems
                                    <br />
                                  </span>
                                </strong>
                                <span class="NormalContent">
                                  The above example is interesting because data
                                  processing will be relatively fast. The data
                                  input needed is held on file and the output is
                                  also to files. There are many data processing
                                  activities, however, that still involve
                                  getting data into a system from paper-based
                                  records and this in itself can slow down the
                                  CPU. (Remember, reading data from an input
                                  device or outputting data to an output device
                                  is a very slow process compared to the speed
                                  the CPU could work at. This is the problem of{" "}
                                </span>
                                <span class="NormalContent">
                                  speed mismatch). There are also systems that
                                  require physical output in the form of
                                  printouts, for example. Because printing is a
                                  very slow operation compared to the speed that
                                  a CPU works at, this is yet another source of
                                  concern for the efficiency of batch
                                  processing. Fortunately, something can be done
                                  to help!
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Key-to-disk data entry
                                  </span>
                                </strong>
                                <br />
                                Organisations need ways of 'storing data
                                offline'. In other words, organisations need
                                ways of getting data from the outside world into
                                a file on their computer system but without
                                tying up the resources of their computer system
                                to do this. A 'modern' key-to-disk system might
                                be employed by an organisation to do just this
                                because it has to transfer lots of details held
                                on paper forms into a file so that the data can
                                then be processed later. This system might work
                                as follows:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      A team of data entry operators key the
                                      data on the paper forms into a temporary
                                      file on the computer.
                                    </li>
                                    <li class="NormalContent">
                                      As the data is entered, it is validated to
                                      ensure that only sensible data is entered
                                      into the system.
                                    </li>
                                    <li class="NormalContent">
                                      Data is stored on disk after it is
                                      validated.
                                    </li>
                                    <li class="NormalContent">
                                      The same paper forms are passed to a
                                      second operator who re-enters the data.
                                    </li>
                                    <li class="NormalContent">
                                      The data is then verified. As the second
                                      operator types in the data, it is compared
                                      to the data held in the temporary file
                                      typed in by the first operator.
                                    </li>
                                    <li class="NormalContent">
                                      If the data is not the same, an error is
                                      reported to the operator. They will then
                                      investigate and correct the problem.
                                    </li>
                                    <li class="NormalContent">
                                      If the data is the same, it is accepted
                                      and can be made available to the batch
                                      processing system.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span class="NormalContent">
                                  This key-to-disk system, with its
                                  <strong class="intext">validation</strong> and
                                  <strong class="intext">verification</strong>
                                  techniques, will pick up most errors in data
                                  input but it is still possible for incorrect
                                  data to be put into the system. It could be
                                  that there is a mistake on the original form
                                  that means both operators enter the incorrect
                                  data. Perhaps both operators can't read the
                                  form and both of their best guesses are
                                  incorrect!
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    In the old days …
                                  </span>
                                </strong>
                                <br />
                                The 'modern' key-to-disk system, then, is a way
                                of offline-processing the data input. If you go
                                back twenty years, a data input device called a
                                'key-to-disk input device' was commonly used by
                                companies to get data on paper forms into a
                                computer file. An operator would write data
                                directly from a special keyboard that had a
                                magnetic disk drive. As they typed, the data was
                                saved directly onto a disk in the drive. When
                                the main batch processing computer was ready, it
                                would simply read the data from the disk.
                                Reading data from a file on magnetic disk was
                                much faster than reading data from a keyboard,
                                when the CPU had to work at the comparatively
                                slow speed of the data input operators. With the
                                development of computer power and network
                                sophistication, however, and the subsequent
                                reduction in computing costs, key-to-disk input
                                devices have largely become obsolete and have
                                been replaced by the 'key-to-disk' system
                                described earlier.
                              </p>
                              <p class="NormalContent">
                                Offline processing of output can also occur.
                                Instead of the output from a batch processing
                                job being sent to a printer it could be sent to
                                a file. The printing can then be done at a later
                                date, when the computer is not being used for
                                processing for a more important task. By not
                                sending the output directly to a printer, the
                                computer can choose when to manage and work at
                                the relatively slow rate of the printer. We saw
                                examples of this with the Internet bank example
                                described earlier in this section.
                              </p>
                              <p class="NormalContent">
                                Offline processing techniques, then, allow
                                organisations to get lots of batch jobs ready
                                for processing. If all of the batch jobs are
                                prepared offline, then the CPU can get each job
                                at will, in the order that makes the most
                                efficient use of the CPU. Selecting what order
                                to do jobs in is known as 'scheduling'. This is
                                discussed in another section.
                              </p>
                              <p class="NormalContent"></p>
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

export default Batch_processing;
