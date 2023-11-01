import React from "react";

function Real_time_operating_systems() {
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
                                Real-time operating systems
                              </h1>
                              <p class="NormalContent">
                                <strong style="line-height: 1.5">
                                  <span class="NormalContentHeading">
                                    Real-time processing
                                    <br />
                                  </span>
                                </strong>
                                When batch processing was discussed, you saw
                                that one of the features of batch processing was
                                that the output wasn't immediate. You may not
                                get the output for a number of hours.&nbsp;In
                                real-time processing, time is critical! The
                                length of time a program takes is important, as
                                is the way that the CPU deals with instructions.
                                Real time is the most important thing (real-time
                                and rapid-response processing are used
                                interchangeably). Making sure that the CPU is
                                used as efficiently as possible as with batch
                                processing is not as important. Most real time
                                applications can be found in booking systems or
                                in control applications.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction to real-time systems
                                  </span>
                                </strong>
                                <br />
                                With batch processing you don't get the output
                                straight away. With real-time processing, an
                                input is received and then processed. Any output
                                generated is processed
                                <strong class="strong">
                                  quickly enough to influence the system before
                                  the next input is received
                                </strong>
                                ! You get the output 'immediately'.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Some examples of real-time systems
                                  </span>
                                </strong>
                                <br />
                                For example, in an air traffic control system,
                                planes' details are displayed on a screen. When
                                a plane has moved to a different position, the
                                screen needs to be updated. If this didn't
                                happen quickly enough, the screen would show a
                                situation that didn't reflect the actual
                                situation. The air traffic controller might then
                                give the pilot instructions based on the
                                inaccurate information displayed on the screen.
                                This may result in an accident. When a missile
                                is going towards a pre-programmed destination,
                                it is constantly readjusting its aim because of
                                wind conditions. It is feeding back into its
                                processor information about its direction from
                                input sensors, comparing that information with
                                where it should be going and then making any
                                necessary adjustments.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Booking systems
                                  </span>
                                </strong>
                                <br />
                                Real-time systems don't have to react with the
                                speed of light, however! For example, if you buy
                                a ticket for the theatre, the booking system
                                will receive an input to say that you have
                                booked a particular seat. It has to process the
                                input and update the file that stores which
                                seats are still available before the next ticket
                                is sold. If the system weren't updated quickly
                                enough then the same seat might be sold again.
                                This is an example of a real-time system, even
                                though the process of booking a ticket may take
                                a few minutes. The reason it is a real-time
                                system is that the master file (the file which
                                holds details of which seats have been sold and
                                which ones are free) is updated before the next
                                seat is booked. Each booking affects the next
                                one. Just to confuse things, the above example
                                is also known as a '
                                <strong class="strong">
                                  transaction process
                                </strong>
                                ' as well as a real-time process. This is
                                because:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/54d1ceb1-2108-46e4-917a-9235db62c221d.gif"
                                  alt="Booking"
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The operator enters some data to be
                                      processed from a transaction with a
                                      customer.
                                    </li>
                                    <li class="NormalContent">
                                      The system takes the transaction's data
                                      and processes it.
                                    </li>
                                    <li class="NormalContent">
                                      Whilst processing that transaction, all
                                      others are 'frozen' until that one is
                                      finished.
                                    </li>
                                    <li class="NormalContent">
                                      The master file of seats available is
                                      updated before the next transaction is
                                      processed.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                It is a little harder to argue that the air
                                traffic control or the missile guidance systems
                                are examples of 'transaction processing',
                                however, because there isn't any interaction
                                between a customer and an operator taking place!
                                Transaction processing can also be called
                                'interactive processing'. This is because there
                                is an exchange of data (an interaction) between
                                a customer and an operator.
                              </p>
                              <p class="NormalContent">
                                To summarise, computer systems can be set up to
                                process data in different ways or modes. Some
                                systems can be designed to use batch processing.
                                Other systems can be designed to use real-time
                                processing, or transaction processing. The
                                designer of any proposed system must look at the
                                application and make a judgement about what to
                                set up.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    A process control system
                                  </span>
                                </strong>
                                <br />A process control system is another
                                example of a real-time system. It is a computer
                                system that automatically monitors and reacts to
                                changes in a process. There are many types of
                                process that could be used as an example, from a
                                greenhouse temperature and humidity control
                                system, to a chemical reaction monitoring
                                system, to an air-conditioning system that
                                maintains a nice cool temperature in a hot
                                computer room. Any processing system will
                                typically have a number of common
                                characteristics. We can summarise them as
                                follows:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Inputs signals from sensors and
                                      transducers.
                                    </li>
                                    <li class="NormalContent">
                                      Some processing software, a program.
                                    </li>
                                    <li class="NormalContent">
                                      Some outputs, possibly using some
                                      actuators. (An actuator is simply any
                                      device that causes movement and can be
                                      controlled by a computer. Examples include
                                      computer-controlled motors and pumps).
                                    </li>
                                    <li class="NormalContent">
                                      Some feedback, to allow a comparison of
                                      the current situation with a target
                                      situation.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <center>
                                <img
                                  src="images/001860b0-242a-417f-97e2-3413c49b2face.gif"
                                  alt="Realtime"
                                />
                              </center>
                              <center>
                                <span class="NormalContent">
                                  <br />
                                  <strong class="strong">
                                    A system to control the temperature in a
                                    chemical reaction tank.
                                  </strong>
                                </span>
                              </center>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      When the system is started, the desired
                                      temperature is inputted into the system,
                                      perhaps using a keypad.
                                    </li>
                                    <li class="NormalContent">
                                      A signal is sent to the heater and the
                                      tank heats up.
                                    </li>
                                    <li class="NormalContent">
                                      The thermistor (a temperature measuring
                                      sensor) constantly sends a signal back to
                                      the computer. This is known as a 'feedback
                                      signal' because it is used to compare the
                                      current temperature with a target one.
                                    </li>
                                    <li class="NormalContent">
                                      The process control program in the
                                      computer checks the current temperature
                                      against the desired temperature.
                                    </li>
                                    <li class="NormalContent">
                                      If the desired temperature hasn't been
                                      reached yet, the heater is kept on. This
                                      process is continued until the desired
                                      temperature is reached or exceeded.
                                    </li>
                                    <li class="NormalContent">
                                      When it is reached or exceeded, the heater
                                      is switched off. If the tank ever becomes
                                      too hot, then a pump (an actuator) is
                                      switched on. This pumps cool water around
                                      the tank.
                                    </li>
                                    <li class="NormalContent">
                                      It is switched off when the temperature
                                      returns to an acceptable level.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="QuestionStyle">
                                <strong style="line-height: 1.5">
                                  <span class="NormalContentHeading">
                                    Speed mismatch between humans and devices
                                    <br />
                                  </span>
                                </strong>
                                We have come across the term '
                                <strong class="intext">speed mismatch</strong>'
                                several times before in previous chapters when
                                talking about slow peripherals working with fast
                                CPUs. We can also talk about it here because
                                there is a speed mismatch concern between a CPU
                                and the users of a computer system. Computers
                                work very quickly. Humans work very slowly by
                                comparison.
                              </p>
                              <p class="NormalContent">
                                Consider any control system. A computer may be
                                able to read in information from sensors,
                                process it and then take appropriate actions in
                                fractions of a second. A human, on the other
                                hand, may take seconds to read information
                                displayed on a screen, seconds to think about it
                                (process it) and then may take more time taking
                                appropriate action, giving the equipment
                                instructions. For some situations, the speed
                                mismatch between the computer and the human may
                                be a serious problem. For example, a pilot may
                                put the safety of passengers at risk if the
                                on-board anti-collision systems of their plane
                                were a manual system. They would first of all
                                have to realise there was a problem then decide
                                what to do about it and finally take appropriate
                                action. It would be far safer (quicker) to rely
                                on the computer making the necessary adjustments
                                to the flight path immediately a problem was
                                detected. Manufacturing lines need adjustments!
                                Temperatures, pressures, flows of liquids and so
                                on all need to be constantly adjusted to take
                                into account a constantly changing set of
                                circumstances on the production lines. If these
                                changes were all left to operators to do, there
                                may well be a lot of products that don't pass
                                quality control! It would take operators time to
                                realise a change was required to the temperature
                                in the first place, for example. They would then
                                spend time deciding what to do about it.
                                Finally, they would need time to make the
                                necessary adjustments. The time spent making
                                adjustments would reduce the number of quality
                                products produced. If control of all the
                                variables were left to the computer, adjustments
                                could be done automatically with minimal time
                                delay and maximum production.
                              </p>
                              <p class="QuestionStyle"></p>
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

export default Real_time_operating_systems;
