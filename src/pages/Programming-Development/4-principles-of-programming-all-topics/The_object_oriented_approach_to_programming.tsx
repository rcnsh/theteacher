import React from "react";

function The_object_oriented_approach_to_programming() {
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
                                <strong>
                                  The object oriented approach to programming
                                </strong>
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Object oriented programming
                                </strong>
                                <br />
                                Object oriented programming (OOP) is a
                                programming language that constructs programs in
                                a way that is different to the top-down
                                programming methodology used in PASCAL or COBOL,
                                for example. Examples of OOP languages include
                                Visual Basic and Java. In the following
                                sections, we will briefly look at JAVA and then
                                some of the concepts behind OOP. It is difficult
                                to see how you can fully understand the concepts
                                behind OOP without using them. I strongly
                                recommend that you get some experience! It will
                                take you a weekend of work.
                              </p>

                              <p class="NormalContent">
                                Go to this site:
                                <strong>
                                  http://www.bluej.org/tutorial/tutorial.pdf
                                </strong>
                                and printout the BlueJ introductory tutorial.
                                The tutorial also gives you instructions on how
                                to download and set up Java on your machine,
                                with an additional piece of software called
                                BlueJ. BlueJ is written for beginners and will
                                cover the basic concepts of OOP. It is
                                thoroughly recommended!
                              </p>
                              <p class="NormalContent">
                                You will need to download the Sun Java compiler
                                from
                                <strong>http://java.sun.com/j2se/ </strong>and
                                also the BlueJ programming environment from
                                <strong>http://bluej.monash.edu</strong>.
                              </p>
                              <p class="NormalContent">
                                Install Java first, then BlueJ - not the other
                                way around! Set-up in most cases will be very
                                easy and should take a couple of minutes once
                                the files have been downloaded. If you do have
                                any problems then use the BlueJ tutorial
                                information.
                              </p>
                              <p class="NormalContent">
                                Once you have installed the software, do the
                                tutorial. It's worth it. Then search the
                                Internet for some 'Java beginner' programs. See
                                if you can enter one or two programs and get
                                them working. As a minimum, try to get a 'Hello
                                World' program working.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Java
                                </strong>
                                <br />
                                Computers such as an IBM clone (a 'normal' PC)
                                or a Macintosh each have their own CPUs that use
                                their own machine code. If you write a program
                                in PASCAL, for example, you can run it on a
                                school PC only after you have translated it
                                using a compiler into machine code. You
                                couldn't, however, take that object code and run
                                it on a Macintosh - because it has a different
                                CPU that has a different instruction set. You
                                would have to retranslate the source code using
                                a different compiler.
                              </p>
                              <p class="NormalContent">
                                Java is an OO high level language. It was
                                designed so that the code can run on any
                                machine! How does it do this?
                              </p>
                              <p class="NormalContent">
                                When it is compiled, it is compiled into code
                                known as Java bytecode for a machine that
                                doesn't exist, called a Java virtual machine!!
                                The bytecode can then be distributed to
                                different types of computers. Each of these
                                types of computers will need to have their own
                                type of interpreter (rather than a compiler).
                                These interpreters can take bytecode and run it
                                on that computer line-by-line.
                              </p>
                              <p class="NormalContent" align="center">
                                &nbsp;
                                <img
                                  src="images/ffffe0dd-fe76-41f1-b699-ae0434d80886oo.gif"
                                  alt="oo"
                                />
                              </p>
                              <p class="NormalContent">
                                Why not simply miss out the 'Java bytecode'
                                stage and distribute the source code and have a
                                compiler for each type of machine rather than an
                                interpreter? Amongst other reasons, compilers
                                are more complex programs compared to
                                interpreters. If you have a new type of CPU it
                                is far easier to write a new interpreter than a
                                new compiler.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Java and the Internet
                                </strong>
                                <br />
                                Java is used extensively on the Internet. Small
                                programs called applets are written by
                                programmers and transmitted with html code
                                across the Internet. If you have a browser that
                                has a Java bytecode interpreter (most of the
                                latest ones have!) and you have enabled your
                                browser to accept Java applets, then they will
                                run when downloaded. Suddenly, very boring html
                                web pages can be turned into anything the
                                programmer wants to turn them into! Not everyone
                                likes the idea of downloading and running
                                programs not guaranteed to be virus-free and
                                which may compromise personal privacy. As a
                                result, some people disable Java applets on
                                their PC!
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An introduction to object oriented programming
                                  (OOP)
                                </strong>
                                <br />
                                In Pascal and other third-generation languages,
                                a top-down programming approach is used. A
                                problem is constantly broken down into modules
                                until each module can be broken down no more.
                                Then a set of procedures and functions is
                                written, one for each module. Finally the actual
                                program is written. The actual program will
                                simply be a call to all of the procedures and
                                functions. When you call a procedure, you simply
                                type the name of the procedure. You may even
                                pass some parameters to it. What actually goes
                                on inside the procedure is of little importance
                                (assuming it works). From the program's point of
                                view, if it needs to use a procedure, it just
                                calls it! This is a kind of information-hiding
                                approach. It doesn't need to know about the data
                                and variables inside the procedure, just how to
                                call it. Unfortunately, in third-generation
                                languages, things can still go wrong. It is
                                possible for other procedures and functions to
                                have a direct effect on the insides of a
                                particular procedure. This is one way that
                                difficult-to-find bugs come about. The principal
                                of ‘information hiding’ (or more technically
                                known as ‘data encapsulation’) has been taken
                                one step further with the OOP approach. In OOP,
                                data can only be accessed via methods provided
                                by objects! These terms will be explained in the
                                next section.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Objects and methods
                                </strong>
                                <br />
                                The central idea of object-oriented programming
                                is that any program is made up of ‘objects’. An
                                object is an instance of a class (see below) and
                                relates to an actual object that can be found in
                                the real world. Here are some examples of
                                classes and objects.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      You might have a class 'shape'. An
                                      instance of that class (in other words, an
                                      'object') might be 'square_1'. Another
                                      object might be 'square_2'. Another one
                                      might be 'Circle_1'. Each of these
                                      'objects' will have their own data.
                                    </li>
                                    <li class="NormalContent">
                                      You might have a class 'pupil'. An
                                      instance of that class might be 'David
                                      Smith'. Another object might be 'Mary
                                      Jones'. Each of these 'objects' will store
                                      the data about that particular pupil.
                                    </li>
                                    <li class="NormalContent">
                                      You might have a class 'Manufacturer'.
                                      Objects might include 'Ford', 'Saab' or
                                      'Skoda' for example. Again, each object
                                      contains data about that particular
                                      manufacturer.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Classes can be viewed as templates
                                </strong>
                                <br />
                                Classes can be viewed as templates from which
                                instances of that class (objects) can be
                                produced. Producing an object or instance from a
                                class is known as ‘instantiation’. A class
                                states what data any object will need and what
                                can be done to that data (known as the
                                'methods'). For example, if you had a class
                                Pupil, any object produced from that class might
                                need data such as name, address, contact number
                                and timetable. Any object would need ways of
                                accessing that data so you would need some
                                methods. These might include
                                PrintAddressLabel(), GetEmergencyNumber() and
                                PrintTimetable(), for example. The brackets
                                after the name of each method indicate that it
                                is a method and not a piece of data.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Objects inherit what data to store and what
                                  methods they can use from their class
                                </strong>
                                <br />
                                We have said that when an instance of a class is
                                produced, for example, when a new pupil joins a
                                school, they will have the ability to store the
                                data that was defined in the class they came
                                from. They will also inherit the methods from
                                that class. You can define one class and use it
                                to produce many objects. For example, you could
                                have a Pupil class and use it to create objects
                                called Smith, Jones, Cooper and Taylor. Each
                                object would store the data specific to that
                                person and the list of data that could be stored
                                came from the class.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Accessing data via the methods of an object
                                </strong>
                                <br />
                                If anybody wants to get access to a new pupil's
                                data, they can <em>only</em> do it by calling a
                                method. The method then accesses the pupil's
                                data. This technique is fundamental to OOP and
                                is known as ‘data encapsulation’. It means that
                                once an object has been set up, the data in that
                                object cannot be corrupted. This is in contrast
                                to procedural languages, as we saw earlier.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  A simple case study of the procedural approach
                                  to programming verses the object oriented
                                  approach
                                </strong>
                                <br />
                                Consider a problem that requires the name of
                                pupils to be read in along with each pupil’s two
                                exam scores from two modules. The program must
                                then display the names of all the pupils, their
                                two exam scores and their average marks. The
                                first attempt at a program design using a
                                traditional top-down design approach for
                                procedural programs might look like this.
                              </p>
                              <p class="NormalContent" align="center">
                                &nbsp;
                                <img
                                  src="images/10583c92-cf96-4dc4-aa02-3abec4c4e7aa1.gif"
                                  alt="top_down"
                                />
                              </p>
                              <p class="NormalContent">
                                This design can be improved, but we will stick
                                with this design. It tells us that we need to
                                write 4 procedures. There are really two main
                                problems with this design. The first is that the
                                variables we use in this program have the
                                potential to be changed from anywhere in the
                                program. This might not seem a big problem but
                                if the above program was a small part of a much
                                bigger program, then we could see this problem
                                appear. If it does, bugs will occur in the
                                software and they may be very difficult to find!
                                The second problem is that the program we are
                                writing is a ‘conceptual’ view of the problem.
                                By this, we mean that it is made up of blocks of
                                code that don’t resemble ‘things’ that we can
                                use our senses to appreciate. They are ideas
                                that exist in our heads rather than something
                                tangible. We may be able to understand
                                ‘Calculate’ but this is just an idea in our
                                minds, not something we can see and touch.
                                Because of this, programs can be hard to
                                understand. <br />
                                <strong>
                                  <span style="text-decoration: underline">
                                    <br />{" "}
                                  </span>
                                  <span class="NormalContentHeading">
                                    The object oriented approach
                                  </span>
                                </strong>
                                <br />
                                The object oriented approach would not begin by
                                using the top-down design approach to write the
                                program. It would seek to identify real objects.
                                In this case, there is an obvious real world
                                object&nbsp; - a student! Each student object is
                                going to need some data. It might have some
                                String variables to hold their first name and
                                their family name and it may have some integer
                                variables to hold the scores for module 1 and 2.
                                It wouldn’t need a variable to hold the average
                                score because if we ever need it, we will
                                calculate it at the time from the module 1 and 2
                                scores.
                              </p>
                              <p class="NormalContent">
                                We also need some methods to set the variable
                                values and also to retrieve (or get) the
                                variable values. Remember, a program cannot
                                access the variables of an object directly but
                                must use the methods available. We will need
                                some methods to ‘set’ the first name, the family
                                name and the module scores. We also need some
                                methods to retrieve the values held in the
                                variables so we need some ‘get’ methods. We know
                                we have lots of students. Our first job is to
                                design a template, a class, from which we can
                                create any number of student objects.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  UML diagrams
                                </strong>
                                <br />
                                We can represent the design of our Student class
                                using a diagram known as a UML diagram. This
                                stands for Unified Modelling Language diagram. A
                                UML diagram is split into three. In the top
                                portion, you have the name of the class. In the
                                middle portion, you list the variables you need
                                and what data type each one is. In the third
                                section, you list the methods that you will
                                include. You will always need a special method
                                called a constructor. This has the same name as
                                the class. The constructor is the method that is
                                called when you want to create a new object,
                                such as a real student, for example. Generally,
                                you will need a method to set the value of each
                                variable and a method to read the contents of
                                each variable. Note that the set methods also
                                include a ‘parameter’. This is the value that
                                you pass to an object when you want to set a
                                variable. So for example, if you want to set the
                                value of module 1 for a student called student1
                                to 56, then the instruction would be
                                student1.setModule1(56). If you ever wanted to
                                read the contents of this variable, then you
                                would use the instruction student1.getModule1().
                                Note there is no value within the brackets when
                                you retrieve the contents of a variable. The UML
                                diagram for the class Student looks like this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/ad3f5b78-33e3-4008-88bf-0ff6296676cd2.gif"
                                  alt="uml"
                                />
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Now let’s write an OO program!
                                </strong>
                                <br />
                                You should use an IDE (Integrated Development
                                Environment) to write an OO program to make life
                                easy for yourselves. An IDE is a software
                                application that provides a programmer with the
                                tools to write applications. Typical tools
                                include:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      <strong>A text editor</strong>, so that
                                      you can write and edit programming code.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Dubugging tools</strong> such as
                                      watch, trace, step and breakpoints, so you
                                      can debug programs.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Translators</strong>, so you can
                                      turn source code into object code.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>A runtime environment</strong>, so
                                      you can run the code and see the results.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Auto-documentation tools</strong>,
                                      so the associated documentation for a
                                      program can be generated automatically and
                                      to a standard form.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                We have already discussed BlueJ. It is an
                                example of an excellent IDE suitable for
                                students. Another equally good one is JGrasp.
                                Your teacher will help you get started with one
                                of these but you should find that with a little
                                time and if you read and do the tutorials that
                                come with them, you will quickly be able to
                                write your own OO programs. These IDEs are free
                                and designed for students! Remember that the aim
                                of the following example is NOT to teach you
                                Java but to help you understand OO concepts. The
                                first step is to write the class. This is not a
                                program, but a block of code that defines the
                                variables and methods that every object of that
                                type will have.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  public class Student&nbsp; //This is the name
                                  of the template or 'class'
                                </strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  private String firstName; //The data is
                                  private - you can only get to it by the
                                  methods.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  private String family;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  private String group;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  private String gender;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  private int module1, module2;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  /*The first method is a special one. It is
                                  used to create an object, a real student,
                                  using this class. It has a special name. It is
                                  called a CONSTRUCTOR. We will discuss this in
                                  the polymorphism section.*/
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>public Student()</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public void setFamilyName (String familyName)
                                  //This method allows you to store a family
                                  name.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  family = familyName;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public void setGivenName (String given) //This
                                  method allows you to store a first name.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  firstName = given;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;public String getFamilyName() //This
                                  method allows you to retrieve a family name.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return family;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public String getGivenName() //This method
                                  allows you to retrieve a given name.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return firstName;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public void setModule1(int mark) //This method
                                  allows you to set the mark for the first
                                  module.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  module1 = mark;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public int getModule1() //This method allows
                                  you to get the mark for the first module.
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return module1;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public void setModule2(int mark) //This method
                                  allows you to set the mark for the second
                                  module.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  module2 = mark;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public int getModule2() //This method allows
                                  you to get the mark for the second module.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return module2;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public double getAverage() //This method
                                  allows you to calculate then return the
                                  average.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return (module1+module2)/2;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p class="NormalContent">
                                Do note that this block of code is not a
                                program! It is simply a CLASS that defines the
                                properties of real-world students. Each time we
                                need a new student, we will call the constructor
                                method in the Student class. This has the effect
                                of creating a new area in memory for a new
                                student, complete with methods and data. When
                                you have copied the Student class code, compile
                                it. If you get any error messages, you will need
                                to debug it. The first thing to check is whether
                                you have copied the code exactly. Java is very
                                funny about capital letters and punctuation.
                                Create a working folder for all the files you
                                write in this section and save this class in it.
                                Then close the Student class.
                              </p>
                              <p class="NormalContent">
                                If we want to write a program that actually uses
                                these classes, that actually creates objects, we
                                need to write a new class which has a special
                                bit of code called the 'main method'. Start a
                                new java file.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;public class StudentProgramTest
                                </strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public static void main(String args[])
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  Student student1 = new
                                  Student();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  //This creates a new student called student1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  Student student2 = new
                                  Student();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  //Another object created called student2
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  String temp2;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  //This creates a variable that can be used to
                                  hold strings.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  int temp; // This creates a variable that can
                                  be used to hold integers.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  System.out.println("Welcome to the Student
                                  mark program");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println(); //This prints a line
                                  space.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter the first
                                  student's first name");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp2 = EasyIn.getString();
                                  //EasyIn.getString() gets keyboard input and
                                  assigns it to temp2
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student1.setGivenName(temp2);
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter the first
                                  student's family name");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp2 = EasyIn.getString();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student1.setFamilyName(temp2); //This uses
                                  student1's setFamilyName
                                  method.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter first
                                  student's first module mark");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp = EasyIn.getInt();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student1.setModule1(temp); //This uses
                                  student1's setModule1 method.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter first
                                  student's second module mark");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp = EasyIn.getInt();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student1.setModule2(temp);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  /*The following code prints out the contents
                                  of the variables held in the object called
                                  student1. Notice that you cannot get access to
                                  the data in the variables directly. You have
                                  to use the methods provided!*/
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Marks for: ");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println(student1.getGivenName() + "
                                  " + student1.getFamilyName());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Module 1: " +
                                  student1.getModule1());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Module 2: " +
                                  student1.getModule2());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Average: " +
                                  student1.getAverage());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  EasyIn.pause(); //The program won't close
                                  until enter is pressed.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p class="NormalContent">
                                Write, compile, debug if necessary and save this
                                file. Before you try to run it, you need to find
                                on the Internet a class called
                                <strong>EasyIn.java</strong>. Someone else has
                                written this class to help with the business of
                                reading in from the keyboard. (Java doesn’t do
                                this automatically). Do a search for
                                <strong>EasyIn.java download</strong>. When you
                                have located this class, download it to your
                                working folder. Now, if you have downloaded
                                EasyIn.java, and you have successfully compiled
                                Student and StudentProgramTest, and you have all
                                of these files in one folder, you can run the
                                program. Open StudentProgramTest, recompile and
                                then run it. Enter data when prompted to. At the
                                end of the program, press &lt;ENTER&gt; to quit.
                              </p>
                              <p class="NormalContent">
                                The whole point of this code is to see that you
                                cannot write directly to student one's
                                variables, the variables that hold the name or
                                the marks. You can only access them via the
                                methods provided. You send a message to the
                                method with the data you want to use and the
                                method sets (or gets) the variables. This is
                                known as 'information hiding' or ‘data
                                encapsulation’.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Polymorphism – more about constructors
                                </strong>
                                <br />
                                In the previous program, when we wanted to
                                create a new real student, we used the line:
                              </p>
                              <p
                                class="NormalContent"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>
                                  Student student1 = new Student();
                                </strong>
                              </p>
                              <p class="NormalContent">
                                This called the constructor method Student() in
                                the Student class and a new student was created.
                                Did you notice though that no details about the
                                new student were entered when we first created
                                the student? We set their name, gender etc
                                afterwards using the methods provided. OO
                                languages, however, give you the facility to
                                create objects with data at the time of creation
                                if you want to. For example, you may want to
                                enter in the name of a student at the time he
                                was created. This is easy to achieve in Java. We
                                just write another constructor. In our program,
                                we need to modify the Student Class so that it
                                has an extra constructor method. The start of
                                the class should now look like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>public Student ()</strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  public Student(String name, String surname)
                                </strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  firstName = name;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  family = surname;
                                </strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p class="NormalContent">
                                Recompile it and save it. Now you need to see it
                                in action. Modify StudentProgramTest. Change
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Student student1 = new Student();
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                so it reads
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Student student1 = new Student(“Monty”,
                                  “Python”);
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Finally, go to the StudentProgramTest code and
                                delete the part of the code that asks you to
                                enter in your student’s first and second name
                                and the calls to the methods that change the
                                name variables. We won’t need these anymore
                                because we are setting the values when we create
                                the new student.
                              </p>
                              <p class="NormalContent">
                                Excellent! Now recompile the program and test
                                it. When you run it, your program should not ask
                                you for your first student’s first and second
                                name, only their marks. But it should display
                                the name Monty Python and his marks! Your
                                Student Class now has two constructors that the
                                programmer can choose which one to use. If they
                                know the student’s name, they can pick the
                                constructor that uses parameters, and if they
                                don’t want to enter in the pupil’s name straight
                                away, they can use the other one that needs no
                                parameters. You can in fact have a range of
                                different constructors but this is beyond the
                                scope of this book! Do note that both these
                                constructors have the same name, although they
                                do have different parameter requirements.
                              </p>
                              <p class="NormalContent">
                                The ability to create objects from a class using
                                different constructor methods which have the
                                same name but different parameter requirements
                                is known as polymorhism.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Inheritance
                                </strong>
                                <br />
                                We have created a class called Student. This was
                                for a particular purpose. We needed to store the
                                name of a student, store their two marks and be
                                able to calculate their average mark when
                                necessary.
                              </p>
                              <p class="NormalContent">
                                Suppose we now want to be able to store the
                                details about a different kind of student. These
                                ‘special students’ will need their name and
                                marks recording but they will also have a target
                                average score stored as well. You might
                                reasonably think that we should write a
                                completely new class, perhaps called
                                SpecialStudent. We would define the variables
                                that the class needed as before, including one
                                to hold the target average score, and then
                                define all the methods needed as before,
                                including extra methods to set and get the
                                target. Well we don’t! OO languages use
                                something called inheritance. In practise, this
                                means we do write a new class but:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      the new class inherits the data and
                                      methods of another (already written)
                                      class.
                                    </li>
                                    <li class="NormalContent">
                                      we add to it any extra bits of data and
                                      any extra methods we need!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                If we are able to use inheritance, it means we
                                can take a previously written class, even if it
                                doesn’t quite do what we wanted, and modify it
                                to create a new class. We don’t have to start
                                completely from the beginning and code up an
                                entirely new class. We can reuse proven code!
                                This is a very powerful feature of OO
                                programming.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Representing inheritance using UML diagrams
                                </strong>
                                <br />
                                We can show how that one class inherits the
                                attributes and methods of another class using
                                UML diagrams. Here is an example.
                              </p>
                              <p class="NormalContent" align="center">
                                &nbsp;
                                <img
                                  src="images/519af15d-353f-4714-8b9e-08e6e0bcbc8e3.gif"
                                  alt="inheritance"
                                />
                              </p>
                              <p class="NormalContent">
                                The UML diagram above shows that Student is the
                                Superclass. SpecialStudent is the Subclass.
                                SpecialStudent is derived from Student. It
                                inherits all of the variables of the Superclass
                                and has an additional one called ‘target’. It
                                also inherits all of the methods of Student, and
                                some additional ones to set and get the target.
                                This diagram is also called an inheritance
                                diagram.
                              </p>
                              <p class="NormalContent">
                                Copy the following code into the folder you have
                                been using for this Java exercise. Compile it
                                and debug if necessary. Note the use of the
                                keyword ‘extends’ in the title line. This is
                                Java’s way of saying that SpecialStudent is a
                                subclass of Student, and therefore inherits all
                                of Student’s variables and methods. Some extra
                                ones are then provided.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  class SpecialStudent extends Student
                                  //SpecialStudent inherits the attributes and
                                  methods of Student
                                </strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong>
                                  private int
                                  target;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  //This is the extra variable each special
                                  student will need.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public SpecialStudent()&nbsp;&nbsp;&nbsp;
                                  //This is the constructor.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public void setTarget(int aimForThis) //This
                                  is the extra set method for level.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  target = aimForThis;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public int getTarget() //This extra method is
                                  used to retrieve a special pupil's level.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  return target;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p class="NormalContent">
                                Now you need to test the subclass
                                SpecialStudent, to see if it did indeed inherit
                                Student’s variables and methods. You should
                                modify your StudentProgramTest code so that it
                                now looks like the following (or you may want to
                                create a new StudentProgramTest2, if you want to
                                keep the old one). We will just instantiate
                                (create) one new student called student21.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>public class StudentProgramTest</strong>
                                <br />
                                <strong></strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  public static void main(String args[])
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  SpecialStudent student21 = new
                                  SpecialStudent(); //This creates a new Special
                                  student.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  String temp2;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  //This creates a variable that can be used to
                                  hold strings.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  int temp; // This creates a variable that can
                                  be used to hold integers.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Welcome to the Student
                                  mark program");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println(); //This prints a line
                                  space.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter the Special
                                  student's first name");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp2 = EasyIn.getString();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student21.setGivenName(temp2);
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter the Special
                                  student's family name");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp2 = EasyIn.getString();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student21.setFamilyName(temp2);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter Special
                                  student's first module mark");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp = EasyIn.getInt();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student21.setModule1(temp); //This uses
                                  student1's setModule method.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter Special
                                  student's second module mark");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp = EasyIn.getInt();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student21.setModule2(temp);
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Please enter Special
                                  student's target average.");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  temp = EasyIn.getInt();
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  student21.setTarget(temp);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Marks for: ");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println(student21.getGivenName() +
                                  " " + student21.getFamilyName());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Module 1: " +
                                  student21.getModule1());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Module 2: " +
                                  student21.getModule2());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Average: " +
                                  student21.getAverage());
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Target average: " +
                                  student21.getTarget());&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  EasyIn.pause(); //The program won't close
                                  until enter is pressed.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong></strong>
                              </p>
                              <p class="NormalContent">
                                You should compile, debug and then run the code!
                                You will see once you have got the program
                                working that SpecialStudent did indeed inherit
                                all of the properties of Student, in addition to
                                some extra ones.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  How would you know an OOP language if you saw
                                  one?
                                </strong>
                                <br />
                                As already mentioned, Java and Visual Basic are
                                examples of Objected Oriented Programming
                                languages. There are other languages! For a
                                language to be called Object Oriented:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      It must contain objects that have methods
                                      and data, with the data only being
                                      accessible via the methods.
                                    </li>
                                    <li class="NormalContent">
                                      The objects must be instantiated from a
                                      class, making use of polymorphism.
                                    </li>
                                    <li class="NormalContent">
                                      The classes must be able to inherit the
                                      properties of other classes.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  The object oriented approach verses the
                                  structure approach revisited
                                </strong>
                                <br />
                                We have discussed briefly earlier in the chapter
                                the structured approach to programming and we
                                have now seen in more detail the object oriented
                                approach. We are now in a better position to
                                summarise the advantages of the object oriented
                                approach in more detail.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      The object oriented approach uses objects.
                                      These are real and easier to view and
                                      understand than the conceptual approach of
                                      the structured programming.
                                    </li>
                                    <li class="NormalContent">
                                      Classes are reusable and you don’t
                                      actually need to know how they work to
                                      reuse them! You just need to look at the
                                      specification for a class that gives a
                                      programmer who wants to use it information
                                      on how to do so.
                                    </li>
                                    <li class="NormalContent">
                                      If you can reuse classes, you can save
                                      time and money on developing new
                                      applications.
                                    </li>
                                    <li class="NormalContent">
                                      If you reuse code that is proven, any
                                      application you develop will have a higher
                                      probability of working correctly.
                                    </li>
                                    <li class="NormalContent">
                                      Classes have fewer errors in them compared
                                      to functions and procedures.
                                    </li>
                                    <li class="NormalContent">
                                      Classes are far more robust than modules
                                      of code produced in structured
                                      programming. They are less prone to errors
                                      because of the nature of data
                                      encapsulation. The data is accessible in
                                      very well-defined ways using the methods
                                      provided for the data.
                                    </li>
                                    <li class="NormalContent">
                                      If modifications to a program have to be
                                      made then it is far easier to do using the
                                      object oriented approach. You can, for
                                      example, remove a class and replace it
                                      without affecting the rest of the program.
                                    </li>
                                    <li class="NormalContent">
                                      It is relatively easy to update object
                                      oriented programs because you can add
                                      features by adding new classes that have
                                      been developed from already proven ones.
                                      This is why the property of inheritance is
                                      so important.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An inheritance diagram example
                                </strong>
                                <br />A shop stocks cheese. The cheese stocked
                                can be one of three types: mild, medium or
                                mature. Two types of mature cheese are stocked:
                                cow’s milk mature cheese and goat’s milk mature
                                cheese. Draw an inheritance diagram for this
                                system.
                              </p>
                              <p class="NormalContent">
                                The first thing to notice is that this shop
                                sells cheese! Cheese is a class that will have
                                properties. Any actual cheese will have data,
                                such as a name and price per kilo and methods,
                                such as a set and get method for the price.
                                However, there are three types of cheese and
                                each of these types will have their own
                                particular properties
                                <em>in addition to</em> those that the class
                                Cheese has. There are two further classes
                                because mature cheese can be broken down into
                                cow’s milk and goat’s milk cheese. We have a
                                total of six classes. The main class is Cheese.
                                The superclass Cheese has three subclasses. One
                                of those subclasses is itself a superclass to
                                two subclasses. We can now draw an inheritance
                                diagram for the cheese classes.
                              </p>
                              <p class="NormalContent" align="center">
                                &nbsp;
                                <img
                                  src="images/4776d182-117d-44aa-a097-89010d409edb4.gif"
                                  alt="inherit"
                                />
                              </p>
                              <p class="NormalContent">
                                The class ‘Mild cheese’ has its own data and its
                                own methods <em>in addition to</em> those it has
                                inherited from the class ‘Cheese’. ‘Mild cheese’
                                is a subclass of ‘Cheese’. ‘Mature cheese’ is
                                also a subclass of ‘Cheese’ and it inherits all
                                of the data and properties of ‘Cheese’ as well.
                                In addition, it has its own data and properties,
                                those peculiar to ‘Mature cheese’. ‘Cow’s
                                cheese’ inherits all of the data and properties
                                of ‘Mature cheese’ (which includes the data and
                                properties of ‘Cheese’). ‘Mature cheese’ is a
                                subclass of ‘Cheese’ but a superclass of ‘Cow’s
                                cheese’.
                              </p>
                              <p class="NormalContentHeading" align="left">
                                Another inheritance example
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/db253293-0d44-4f34-9b9e-806aa938ee8f6.gif"
                                  alt="inherit"
                                />
                              </p>
                              <p class="NormalContent" align="left">
                                Everyone is an employee of a company and certain
                                details about all employees are needed. But full
                                time and part time workers have their own extra
                                details kept, depending upon whether they are
                                full or part time. For example, a part time
                                worker may need to have the number of hours each
                                week they are employed stored. The company might
                                also employ contractors from time to time. These
                                might be people who are self employed or they
                                might come from an agency, and they need their
                                own, extra details storing, depending on their
                                situation.
                              </p>
                              <p class="NormalContentHeading">
                                <strong>
                                  <span class="QuestionStyle">
                                    Q18. More UML design - a case study
                                  </span>
                                </strong>
                                <span class="QuestionStyle">
                                  <br />
                                  You are to design a class called
                                  RoadTransport. It will have three pieces of
                                  data: Length, which is a real number,
                                  NumberOfWheels, which is an integer, and
                                  NeedsToBeTaxed, which is Boolean. Each of
                                  these pieces of data will have a set method
                                  and a get method. There will also be two
                                  constructors. The first will be used when you
                                  want to create a new object that records the
                                  details about a new type of transport but you
                                  don’t know any details about it. The second
                                  constructor will be used when you know the
                                  length, number of wheels and whether it needs
                                  to be taxed or not.
                                </span>
                              </p>
                              <p
                                class="QuestionStyle"
                                style="margin-left: 30px"
                              >
                                a) Sketch a URL for the above class.
                                <br />
                                b) Using examples from this scenario, clearly
                                state what a class is and what an object is.
                                <br />
                                c) Using this scenario, explain the property of
                                polymorphism in an OO language.
                                <br />
                                d) Using this scenario, state what is a
                                constructor used for?
                                <br />
                                e) Using this scenario, explain what the
                                property of encapsulation is and why it is so
                                important in OO languages.
                                <br />
                                A new class is to be written called Car. It will
                                be derived from the RoadTransport class. In
                                addition to the data variables and methods
                                inherited from the RoadTransport class, the Car
                                class will also have a string for holding the
                                Manufacturer of the car and a real number to
                                show the EngineSize in litres. Both of these
                                variables will need set and get methods and
                                there will be only the default constructor.
                                <br />
                                f) Redraw the UML diagram to show both classes.
                                Using labels, show which class is the superclass
                                and which one is the subclass.
                                <br />
                                g) Using suitable names, add the data and
                                methods to your UML diagram in the appropriate
                                place.
                                <br />
                                h) Using this scenario, explain why the concept
                                of inheritance is so important in an OO
                                language. Ensure that you clearly explain the
                                ways in which inheritance helps programmers
                                produce new applications quickly and to a high
                                quality (i.e. bug-free and reliable). <br />
                                Another class is to be written that will also be
                                derived from the RoadTransport class. It will be
                                called Motorbike. It will have a string to hold
                                the Manufacturer, a string to hold the Model,
                                and a Date to hold the date that that model of
                                motorbike was designed. The class will have a
                                default constructor as well as a constructor
                                that can be used when the Length, Manufacturer,
                                Model and Date are known. In addition, there
                                will be a set and get method for each piece of
                                data.
                                <br />
                                i) Redraw the UML diagram to include the
                                motorbike class. Label it as either a superclass
                                or a subclass, as appropriate.
                                <br />
                                Another class is to be written that is to be
                                derived from the class Car. It is to be called
                                VintageCar. It will have a default constructor,
                                and will have a string to hold the DesignersName
                                and a variable called DateBuilt to hold the date
                                it was built. These will need set and get
                                methods.
                                <br />
                                j) Redraw the UML diagram as appropriate.
                                <br />
                                k) Write down a list of
                                <strong>
                                  <em>all</em>
                                </strong>{" "}
                                the data variables and all of the set and get
                                methods that VintageCar has.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Background reading
                                  </span>
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  There are thousands and thousands and
                                  thousands of tutorials, notes and forums to do
                                  with object oriented programming on the
                                  Internet.&nbsp;
                                </span>
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

export default The_object_oriented_approach_to_programming;
