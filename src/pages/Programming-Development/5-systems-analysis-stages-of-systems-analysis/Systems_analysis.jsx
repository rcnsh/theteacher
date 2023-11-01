import React from "react";

function Systems_analysis() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">
                                Systems analysis
                              </h1>
                              <p>
                                Sometimes, too much information can be as bad as
                                too little information! A Systems Analyst will
                                quickly amass a large amount of data and
                                information, as they carry out interviews, do
                                questionnaires, collect documents and so on.
                                They need to make sense of it all for the
                                Systems Analysis Report. They would typically do
                                the following things as part of the systems
                                analysis stage:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Produce written descriptions of current
                                        methods and systems.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Draw dataflow diagrams (DFDs).
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Draw systems flowcharts.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Draw Jackson diagrams.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Design the data dictionary.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Write down descriptions of problems.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Write down and agree with the customer
                                        the Requirements Specification.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Write down possible outline solutions
                                        that would satisfy the Requirements
                                        Specification.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Write down a description of the current
                                        hardware and software and what needs to
                                        be upgraded or replaced.
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong style="line-height: 1.3em">
                                  Written descriptions of current methods and
                                  systems
                                </strong>
                                <br />A good starting point for a Systems
                                Analyst when investigating a new problem in an
                                unfamiliar business is to write out how each
                                system in the problem area operates in as much
                                detail as possible. This should be done:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        By describing systems using the present
                                        tense.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        By describing systems as though the
                                        Systems Analyst is 'a fly on the wall',
                                        an observer.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                For example, consider a school library that is
                                completely paper-based. A Systems Analyst has
                                been asked to investigate computerising the
                                library. They would arrange an interview with
                                the librarian who would then explain how each of
                                the&nbsp;sub-systems in the library work. One
                                sub-system might be the one used to take books
                                out. The Systems Analyst would listen to what
                                the librarian says and then produce a written
                                description of it. It might go something like
                                this:
                                <br />
                                <br />
                                <em>
                                  <strong>
                                    A pupil selects a book from the shelf and
                                    takes it to the checkout counter. They
                                    present the book and their membership card
                                    to the librarian. The librarian retrieves
                                    the member's details from the 'members card
                                    index system'. She then checks how many
                                    books the pupil has out already. If it
                                    exceeds 3 then the pupil is told that they
                                    must return a book before they can take any
                                    other out. The librarian also checks to see
                                    if the membership has been 'blocked'. This
                                    can occur if a fine hasn't been paid for an
                                    overdue book or if the pupil has been
                                    misbehaving. If the pupil has got less than
                                    three books and the account has not been
                                    blocked, then the librarian transfers the
                                    title and author details to the member’s
                                    card and the date the book is due back. This
                                    card is then filed. The librarian retrieves
                                    the 'book details' card from the 'borrowed
                                    book card index system' and records the
                                    pupil's membership number on it and the
                                    return date. This is filed. The book is
                                    stamped with the return date and returned to
                                    the pupil with their membership card.
                                  </strong>
                                </em>
                                <br />
                                <br />
                                Of course, the Systems Analyst will want to go
                                back to the librarian and read back the
                                description after it has been written up, just
                                to check that they have understood everything
                                correctly and that nothing has been missed out.
                                The above example is for the 'Taking a book out'
                                sub-system. The Systems Analyst would also need
                                to write descriptions for each sub-system:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'returning a book' sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'blocking a pupil' sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'fine' sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'adding a new book to the library'
                                        sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'removing a book from the library'
                                        sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'adding a new member' sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'removing a member’ sub-system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The 'reserving a book' sub-system.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Describing these sub-systems, arranging
                                interviews, writing them up, summarising them
                                and then checking that they are accurate and
                                complete descriptions is not a five minute job!
                                A lot of information is going to be generated
                                and, following on from written descriptions, the
                                Systems Analyst will want to use special
                                diagrams to bring the information together.&gt;
                                <br />
                                <br />
                                <strong>Dataflow Diagrams (DFD)</strong>
                                <br />
                                Dataflow diagrams, or DFD diagrams, are used to
                                summarise the flow of data around a system.
                                Written descriptions are fine, but pulling a lot
                                of information together in the form of a diagram
                                helps everyone involved 'see' what is going on
                                in the system a lot easier and systems can then
                                be discussed amongst different people. Because
                                systems such as the library can get quite
                                complicated, they should be broken down into
                                sub-systems, as we have already explained. Each
                                one can then be described and then a DFD can be
                                drawn for each one. There are only four basic
                                symbols in a DFD (not counting the big system
                                box in the Level zero diagram).
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        An oval, representing an entity. This is
                                        someone or something that puts
                                        information into the system or receives
                                        information from it.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        An arrow, representing a flow of data
                                        from one place to another.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        A box, which represents an action or
                                        processing on some data.&nbsp;
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        A long box, which represents a store of
                                        data.&nbsp;
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                In the next example, we can see how DFDs are
                                produced. The diagram below shows the first step
                                in drawing a DFD. It shows the whole system as a
                                box. It also shows the entities such as people
                                that interact with the system as well as any
                                data that enters the system from an entity and
                                any data that leaves the system to an entity.
                                This DFD is known as a ‘level zero’ or ‘context
                                diagram’. Notice that the librarian is not shown
                                because she is part of the system, not external
                                to it. Also notice that there are two ovals
                                representing 'pupil'. They are the same entity -
                                we could have drawn just one. This would have
                                cluttered the diagram, however, and would have
                                made it less clear. Two ovals have been drawn
                                instead. To show that they are the same entity,
                                a diagonal line is drawn in the top left of each
                                one.
                              </p>
                              <p style="text-align: center">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/0dcaa782-8c18-4c66-a554-69cf08eec624context.jpg"
                                  alt
                                />
                                <br />
                                <strong>A context diagram</strong>
                              </p>
                              <p style="text-align: left">
                                The context diagram above shows a simplified
                                version of the whole system but doesn't show
                                what actually happens to the data, where it is
                                stored and the processes that happen to it. It
                                doesn't show what is happening inside the box
                                called 'Taking a book out’ sub-system. The box
                                needs to be broken down to show some detail. The
                                next stage is to produce a ‘level one diagram’.
                                A first attempt is shown in the next diagram.
                              </p>
                              <p style="text-align: center">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/7dd0110f-62e1-4655-b402-ebe0f9e099belevel1.jpg"
                                  alt
                                />
                                <br />A level one diagram
                                <strong>
                                  {" "}
                                  <br />
                                </strong>
                              </p>
                              <p style="text-align: left">
                                See if you can read the description of the
                                'Taking a book out' sub-system and match it up
                                to the level one diagram. Try to follow what is
                                happening. Do note that a Systems Analyst will
                                take quite a few attempts to get the DFDs right.
                                When you do projects, don't expect to get these
                                diagrams correct at the first attempt. You need
                                to have a go at it, then discuss it with
                                someone, then sleep on it, then have another go,
                                and repeat the process until you get it right!
                                The level one diagram is a big improvement on
                                the level zero diagram because it shows the
                                processes that happen to data and what storage
                                there is. Some of the processes, such as '1.2
                                Valid' could be broken down further into what
                                are known as level two diagrams. These are
                                beyond the scope of this discussion.
                                Interestingly, this diagram can be closely
                                matched to a database. For example, where there
                                is a data store, you need to have a table in a
                                database. Where there is a process, you need to
                                have a query. Where there is a flow into the
                                system, you need to have a data input form and
                                where there is a flow out of the system, you
                                need to have a report. We are starting to move
                                closer to designing a database!
                                <br />
                                <br />
                                <strong>Systems flowcharts</strong>
                                <br />A similar but different type of Dataflow
                                Diagram is known as a ‘systems flowchart’. This
                                type of diagram also gives an overall picture of
                                a system. A systems flowchart shows similar
                                information to DFDs in that it shows the
                                processes that happen on data along with the
                                data flows. In addition, however, these diagrams
                                also show what hardware is used for input, what
                                hardware is used for output and also the data
                                storage devices. They also show what type of
                                file is being used, for example, whether it is a
                                master file or a transaction file. Both system
                                flowcharts and DFDs are used by analysts to show
                                whole systems. A number of symbols are used in
                                systems flowcharts. These include (amongst
                                others):
                                <br />
                                <br />
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/aef73899-4d6c-418e-94e2-4882bd648d6bflowchartsymbols.jpg"
                                  alt
                                />
                                <br />
                                An exam board marks a set of exam papers for
                                pupils at a school. They enter the marks into
                                their system, validating each mark as it is
                                entered. An error report is generated for any
                                problem marks and the marks are then re-entered.
                                Once all the marks have been entered, they are
                                sorted.&nbsp; Pupils’ information is then
                                retrieved from its system, the new marks entered
                                and the records updated. Summaries of the
                                results and certificates are then sent out. A
                                system flowchart might look like this:
                              </p>
                              <p style="text-align: center">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/a3c35f3e-7f66-463e-abe9-d243761d84fcflowchartexample.jpg"
                                  alt
                                />
                                <br />
                                An example of a system flowchart.
                              </p>
                              <p style="text-align: left">
                                Note that processes are shown (‘ Validate
                                marks’, ‘Sort file’ and ‘Exam results’
                                programs), data stores can be identified and
                                flows of data are also on view. In addition,
                                however, we can see some of the hardware needed
                                (keyboard and hard disk) and some of the
                                different types of files (master and transaction
                                files). <br />
                                <br />
                                <strong>Structure diagrams</strong>
                                <br />
                                Structure diagrams can also be used to represent
                                systems and also program designs. They show a
                                different type of information to DFDs. One type
                                of structure diagram uses symbols from the JSD,
                                or Jackson Structured Development way of showing
                                systems. This breaks down a problem into
                                ever-increasing levels of complexity. It is read
                                from top to bottom (using a different number for
                                each level) and from left to right (using a
                                different number for each process in one level).
                                Going back to the 'Taking a book out'
                                sub-system, you could represent the sub-system
                                using the following diagram:
                              </p>
                              <p style="text-align: left">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/6844db9d-decc-4410-bfbe-d7ab864b46adstructurediagram.jpg"
                                  alt
                                />
                                <br />
                                This type of diagram can be used to break down
                                complex problems into easier-to-understand
                                blocks. If you were programming, each block
                                could then represent a module or function. We
                                have come across this type of diagram before
                                when we discussed top-down design. Even if you
                                are not programming a system but just want to
                                understand the processes involved, this kind of
                                diagram can pull together a lot of complex
                                descriptions into a form that can be understood
                                at a glance.
                                <br />
                                We have introduced the idea of structure
                                diagrams above, but we have only just scratched
                                the surface. We will meet these diagrams again
                                in another chapter and take them even further.
                                <br />
                                <br />
                                <strong>Data dictionary</strong>
                                <br />
                                The data dictionary holds information about
                                data! Any system needs data to make the system
                                work. The Systems Analyst must construct a
                                dictionary of all the data items used in the
                                system because this information will be needed
                                by the people who actually build the new system,
                                who write the software. This point of reference
                                for information about data items is known as the
                                ‘data dictionary’. They tell somebody the form
                                of the data, how each data item is actually made
                                up. Data dictionaries are often best done as a
                                table. A simple data dictionary may just have
                                the name of the data, its data type, the
                                validation rules that apply to it and an example
                                but you may also find a data dictionary with the
                                following headings being used:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The name of the data item.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        What synonyms there are for the data
                                        item (different words that mean the same
                                        thing e.g. pupil and student. Ideally,
                                        every diagram should refer to a 'pupil'
                                        or a 'student' but both should not be
                                        used across the project as it can lead
                                        to confusion.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Whether it is a primary key, foreign
                                        key, a secondary key or a simple piece
                                        of data.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Data type. (Whether it is a real number,
                                        an integer, a text, a character, a
                                        Boolean, a date and so on).
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Validation rules that apply e.g. the
                                        range of allowable values for integers,
                                        the number of allowable characters for
                                        text, the allowable characters for a
                                        character, the way that the date has to
                                        be entered using an input mask, the
                                        number of decimal points allowed,
                                        whether it is required or not and so on.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Examples of typical data entries.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        The origin of the data, where it comes
                                        from, how it is generated in the first
                                        place, where it is stored.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        What exactly the data item is used for,
                                        what happens to it, why it is part of
                                        the system at all.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Specification of access rights – who can
                                        view, edit or delete the data item.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="text-align: left">
                                The Systems Analyst will start the data
                                dictionary at the beginning of the project and,
                                like the list of problems, will add to it as new
                                information becomes available. Some of this
                                information may come from interviews, but much
                                may come from existing documentation. One reason
                                why collecting documents from an existing system
                                is important is that it shows the Systems
                                Analyst what data is needed in the current
                                system, with examples of the data, where data
                                comes from, how it is used and so on.
                                <br />
                                <br />
                                <strong>
                                  Written descriptions of problems
                                </strong>
                                <br />
                                As interviews progress and the Analyst becomes
                                more familiar with the existing system, problems
                                with it will emerge. People using the current
                                system and methods will highlight problems and
                                the Analyst will notice others. For example,
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        System users might complain about things
                                        not working as it should.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Users might complain about some tasks
                                        being time-consuming or requiring a lot
                                        of paperwork.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Customers might complain that they never
                                        get the right information at the right
                                        time.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        It might become obvious to the Analyst
                                        that some tasks are labour-intensive and
                                        could be easily automated.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        It might become obvious to the Analyst
                                        that some tasks which should be possible
                                        and which an organisation has never
                                        thought about doing are simply not
                                        possible with the current set-up.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="text-align: left">
                                For example, in the paper-based library example,
                                the librarian might during interviews bemoan the
                                fact that she has to use two different card
                                index systems, one so she can search for members
                                and the books they have out and one so she can
                                search for books to see which member has it out!
                                The Systems Analyst might do a questionnaire to
                                pupils to find out what they think of the
                                library service and many might comment on how
                                slow the system is or what features they
                                actually like about the current set-up. The
                                Systems Analyst should write a list of all the
                                problems as they come across them! They should
                                also write a brief description explaining why
                                each problem happens. This is often best done as
                                a table.
                                <br />
                                <br />
                                <strong>Requirements Specification (RS)</strong>
                                <br />
                                When the Analyst has fully investigated the
                                problem area of a business, they should have
                                produced the following deliverables for the
                                Systems Analysis stage of the Systems Life
                                Cycle:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Written descriptions of current methods.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        DFDs of current methods.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        System flowcharts.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        Structure diagrams of current methods.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        A data dictionary of the current system.
                                      </span>
                                    </li>
                                    <li>
                                      <span style="line-height: 1.3em">
                                        A table of problems and why they exist.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="text-align: left">
                                In summary, the Analyst now understands the
                                business, the problems in detail and the methods
                                used at the moment. Note that they have as yet
                                not started work on designing the detail of a
                                new computerised system. Having said that, the
                                Analyst will have been considering how the
                                problem can be solved. They will have been
                                investigating alternative solutions and weighing
                                them up against each other. They will have a
                                good idea where the solution will come from, but
                                they haven't got down to the detail of designing
                                the new system yet. This is because they have
                                not actually agreed with the customer what the
                                final system will be able to do! This is the
                                next job in this stage. The Analyst should work
                                on producing one of the most important
                                deliverables in the project, the Requirements
                                Specification. This document will form the
                                contract between the company needing a new
                                computerised system and the company who will
                                make the new system. It lists what the customer
                                expects the system to be able to do and how,
                                when the project is complete, the final product
                                will be judged.
                                <br />
                                <br />
                                Each item in the Requirements Specification
                                should state a way that its success or failure
                                can be measured. When the project is finally
                                finished, it is the Requirements Specification
                                that is used by the customer to check that they
                                have got what they agreed to buy and it is used
                                by the Systems Analyst to check that they have
                                made what they said they would make, to the
                                standard they said they would make it to.
                                <br />
                                <br />
                                <strong>SMART requirements</strong>
                                <br />
                                When you are writing a Requirements
                                Specification, one way to help you write
                                excellent requirements as opposed to wishy-washy
                                ones, is to ensure each requirement is SMART.
                              </p>
                              <h1 style="text-align: center">
                                S&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp;M&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp;A&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp;R&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;T
                              </h1>
                              <p style="text-align: left">
                                <strong>Specific.</strong>&nbsp;&nbsp;
                                &nbsp;Each requirement must be clearly described
                                and easily understood by everyone.
                                <br />
                                <strong>Measurable.</strong>&nbsp;&nbsp;
                                &nbsp;You should be able to write down tests
                                that can measure the requirement. Requirements
                                such as ‘user-friendly’, ‘easy to use’,
                                ‘effective’ and ‘pleasing to the eye’ for
                                example, are difficult to measure. ‘Fast’ is
                                easy to measure because you can set tests e.g.
                                must be able to display a customer’s account
                                details in under 0.5 seconds.
                                <br />
                                <strong>Agreed.</strong>&nbsp;&nbsp; &nbsp;The
                                customer and Project Manager must agree on each
                                requirement and how it will be measured.
                                <br />
                                <strong>Realistic.&nbsp;</strong>&nbsp;
                                &nbsp;Each requirement must be realistically
                                achievable, taking into account the resources
                                and budget.
                                <br />
                                <strong>Trackable.&nbsp;</strong>&nbsp;
                                &nbsp;The project manager must be able to
                                monitor and measure the progress of the
                                achievement of a requirement. For this to
                                happen, the requirement must be something
                                tangible, something that they can see being
                                developing, something that they can tell has
                                been finished.
                                <br />
                                <br />
                                <strong>
                                  The process of producing an agreed
                                  Requirements Specification (RS)
                                </strong>
                                <br />
                                The Systems Analyst will use the written
                                description of problems as a starting point to
                                producing the RS. They will produce a 'draft
                                RS’. In the draft RS, the Analyst will set out
                                what he thinks the customer should expect from
                                the new system, what the new system will be able
                                to do and how success/failure will be measured.
                                He will then arrange a meeting with the customer
                                so that they can discuss the draft. Both the
                                customer and the Analyst may well want to make a
                                few changes as a result of the meeting. The
                                Analyst then goes away and re-drafts the RS.
                                Another meeting is arranged and the re-draft is
                                discussed. If everyone is happy, both parties
                                sign and date the RS. If more work needs to be
                                done on it, then it is re-drafted again.
                                <br />
                                <br />
                                <strong>Possible outline solutions</strong>
                                <br />
                                Once the Requirements Specification has been
                                completed, the Analyst can start outlining
                                solutions. They need to think about what
                                software will be used and how the features of
                                the software will be employed to meet the
                                requirements laid down in the Requirements
                                Specification. It is always possible in a piece
                                of software to approach a problem in different
                                ways. The Analyst should document some of these
                                possible approaches. They could also look at
                                different applications to solve the problem and
                                compare and contrast the ability of each
                                application to meet the needs of the
                                Requirements Specification. They may also look
                                at designing a completely new application from
                                scratch. Whichever of the solutions is
                                preferred, it should be justified. There should
                                be a clear statement which identifies the
                                features of the software that will solve the
                                problem as laid out in the Specification.
                                <br />
                                <br />
                                <strong>
                                  Hardware and software constraints
                                </strong>
                                <br />
                                The Analyst needs to produce a list of the
                                hardware and software that is being used in the
                                current system (if applicable). When a list has
                                been drawn up of what exists currently, they
                                should then comment on how this may or may not
                                impact on any future solution. They might be
                                able at this stage to identify that certain
                                software is being considered for a solution, but
                                the software cannot be run on the existing
                                machines because they are not of the right
                                specification, for example. It may be that there
                                are only standalone computers at a business but
                                the analyst is thinking of using email and
                                shared resources that require a network. The
                                Analyst should then draw up a list of any new
                                software and hardware that will be needed. They
                                should also justify these proposed purchases to
                                the company so that they are clear about the
                                reasons for spending their money on this
                                equipment. Once the Requirements Specification
                                is completed and agreed to, the real work can
                                begin! The Systems Analyst can start designing
                                the detail of the new computerised system in the
                                next stage of the Systems Life Cycle - the
                                Design stage.
                              </p>
                              <p style="text-align: left">&nbsp;</p>
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

export default Systems_analysis;
