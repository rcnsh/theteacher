import React from "react";

function Arrays() {
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
                              <h1 style="text-align: center">Arrays</h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                According to the BCS, an array is "a set of data
                                items of the same type grouped together using a
                                single identifier". A one-dimensional array can
                                be thought of as a list of data. Two-dimensional
                                arrays can be thought of as tables of data.
                                Arrays are important structures in programming.
                                They are set up, or initialised, by a programmer
                                to force a computer to store data in blocks.
                                When you write a program and then compile it,
                                your computer (not you) decides exactly where in
                                your RAM to put the executable code. If your
                                computer has 64MB of RAM, then it has 64 x 1024
                                x 1024 memory addresses where it could store
                                data. Your computer decides what actual memory
                                addresses to use for the program and also for
                                the data your program uses. The programmer
                                doesn't! The programmer refers to memory
                                addresses in a program in an indirect way, using
                                variable names.
                              </p>

                              <p>
                                <strong>Why do we need arrays?</strong>
                                <br />
                                If you store 10 pieces of data, perhaps 10 exam
                                results, for example, your computer decides
                                which addresses to use to store the data in. It
                                could decide to use 10 memory addresses that are
                                spread out from each other. As far as the
                                programmer is concerned, they don't know what
                                actual addresses have been selected and they
                                don't need to know. They will need to be able to
                                fetch each of the pieces of data from time to
                                time, however. They do this by giving each piece
                                of data a name. If they then need to display the
                                third exam result, for example, they might have
                                an instruction in the program:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Write ("The third exam result was: ",
                                  Third_result)
                                </strong>
                              </p>
                              <p>
                                Suppose you had a thousand pupils and you had to
                                store their names. You would need a thousand
                                variable names so that you can get back each one
                                when you need it. You would also need variable
                                names for each of their addresses, the dates of
                                births and so on. You would need a variable name
                                for each individual piece of data so that you
                                can always get back each individual piece of
                                data. Programs could end up with thousands of
                                variable names. There is a better way! It might
                                be better to group similar types of data
                                together in a table (otherwise known as an
                                array), giving the array a single name. Then, if
                                you wanted any particular piece of data (an
                                element), you can refer to the name of the array
                                along with the co-ordinates of that element.
                              </p>
                              <p>
                                <strong>How do you initialise an array?</strong>
                                <br />
                                If you want your program to use an array, then
                                you need to tell the program to use one! Every
                                array in a program, and you may have several,
                                must be initialised in the program itself. This
                                forces the computer to group together the array
                                data in a block of successive memory locations.
                                A programmer sets up an array in a program by
                                stating:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The name (the identifier) of the array.
                                      (You might have more than one array.)
                                    </li>
                                    <li>The size of the array</li>
                                    <li>
                                      The data type the array will hold - what
                                      kind of data will be stored in the array.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  Addressing elements in a one-dimensional array
                                </strong>
                                <br />
                                If you have an array, then you refer to a
                                particular place in the array by using the
                                array's identifier (its name) followed by an
                                'address'. For example, suppose we define a
                                one-dimensional array called SCORES that can
                                hold up to 10 integers, and then fill it with
                                some numbers. You would use something like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SCORES: array[1..10] of integer</strong>
                              </p>
                              <p>
                                This sets up an array called SCORES that is 10
                                elements (memory locations) long, each location
                                holding an integer.
                              </p>
                              <p>
                                <img
                                  src="images/82471e74-09ce-4241-b71a-32a2abc7e3dfarray1.JPG"
                                  alt
                                />
                              </p>
                              <p>
                                <strong>
                                  Addressing elements in a two-dimensional array
                                </strong>
                                <br />
                                Suppose you now define a two-dimensional array
                                called RECORD_OF_SCORES. It stores 10 pupils'
                                last three scores. You would use something like
                                this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  RECORD_OF_SCORES : array[1..10,1..3] of
                                  integer
                                </strong>
                              </p>
                              <p>
                                This sets up an integer array called
                                RECORD_OF_SCORES, which is 10 rows by 3 columns,
                                as shown here:
                              </p>
                              <p>
                                <img
                                  src="images/a8bb1269-5c0f-4228-a89b-b5c36aa7bb07array2.JPG"
                                  alt
                                />
                              </p>
                              <p>
                                <strong>
                                  Three dimensional arrays
                                  <br />
                                </strong>
                                If you think of a cubic structure, it has an X
                                axis and a Y axis just like on any graph, and it
                                also has a depth, which is the Z axis.
                              </p>
                              <p>
                                <img
                                  style="margin: 10px"
                                  src="images/148b450e-16ca-492d-b4ed-5e535387ce5barray.GIF"
                                  alt="array"
                                  width="240"
                                  height="171"
                                />
                              </p>
                              <p>
                                We can use this model to construct a three
                                dimensional array. Each of the little cubes can
                                hold some data, and each can be specifically
                                referenced using its X, Y and Z coordinate. Note
                                the rather strange way that the Y axis is going
                                downwards rather than upwards. It's traditional
                                to make the top left hand position the origin in
                                programming, and this time, I'll declare the
                                size of the X axis first in the array, then the
                                Y axis and then the Z axis:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  myCube : array[1..3, 1..2, 1..4] of integer.
                                </strong>
                              </p>
                              <p>
                                We can then write to a specific element in the
                                array using its X, Y and Z coordinate:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>myCube [3, 1, 4] = 65</strong>
                              </p>
                              <p>
                                and we can read back the contents of any
                                element:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>temp = myCube[2, 1, 3]</strong>
                              </p>
                              <p>
                                <strong style="line-height: 1.5">
                                  Some good and bad points about arrays
                                </strong>
                              </p>
                              <p>The following points can be made:</p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Arrays are very straightforward to set up
                                      in a programming language. You simply
                                      declare that you are going to use one by
                                      giving the name of the array, its size and
                                      the type of data it will store. This is an
                                      advantage of an array compared to some
                                      other data structures that are more
                                      complex to define and use.
                                    </li>
                                    <li>
                                      As has already been said above, when a
                                      programmer sets up an array, they have to
                                      state the size of the array. That means
                                      they must estimate the size. But what if
                                      they make the maximum size too small? Some
                                      data will get lost. What if they estimate
                                      too big a size? This would waste some
                                      space in memory. Having to define the size
                                      in advance is a disadvantage.
                                    </li>
                                    <li>
                                      Suppose you define a one-dimensional array
                                      that is 1000 elements long. When you
                                      compile it, a thousand places will be
                                      reserved in memory for the array. Now
                                      suppose it you leave it empty! You have
                                      reserved all of this space, but not used
                                      it. Another disadvantage of arrays is that
                                      they can lead to a waste of RAM.
                                    </li>
                                    <li>
                                      Turning the above disadvantage around,
                                      however, you can argue that because the
                                      space for an array is defined when a
                                      program is compiled, it means that you
                                      will always have the space available to
                                      store data. Some data structures grow and
                                      shrink as you store and remove data. There
                                      is no guarantee, however, that space will
                                      be available for new data if one of these
                                      dynamic data structures is used. Compared
                                      to these ‘dynamic’ data structures,
                                      arrays’ structure is fixed and reserved in
                                      advance and having this guaranteed storage
                                      space is an advantage. We refer to arrays
                                      as ‘static data structures’ for this
                                      reason.
                                    </li>
                                    <li>
                                      With some data structures, you cannot get
                                      to a data item without going through other
                                      data items. Think of a music tape for a
                                      moment. You can only get to a particular
                                      song in the middle of the tape by winding
                                      through all of the ones at the front
                                      first! The good news with an array is that
                                      you don't have to go through other data
                                      items to get to a particular one. You can
                                      access a particular 'element' directly.
                                      This kind of access is known as direct
                                      access and it allows fast retrieval of
                                      data. Not all data structures allow fast
                                      access to data, as we will see.
                                    </li>
                                    <li>
                                      It is more efficient for a programmer to
                                      store data together in a block if the data
                                      has to be stepped through and worked on.
                                      An index can be set up that points to the
                                      beginning of an array, and then it can
                                      simply be incremented within a loop. Each
                                      data item in the array can then be
                                      processed in each pass of the loop.
                                    </li>
                                    <li>
                                      If an array stores some data in an
                                      organised way, perhaps storing names of
                                      pupils alphabetically, then inserting and
                                      deleting items can become a little
                                      complicated compared to other data
                                      structures. For example, if you added
                                      Jones to an alphabetical list of pupils,
                                      then to keep the alphabetical order
                                      correct, you would have to change the
                                      array locations of pupils above Jones -
                                      you would have to move them up to make
                                      space for Jones!
                                      <span style="line-height: 1.5"> </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  Languages that do not use arrays
                                </strong>
                                <br />
                                Some languages do not have array structures.
                                They use data structures that are similar but
                                different to arrays and are called different
                                names, or they use specially written modules to
                                mimic arrays.
                              </p>
                              <p>
                                For example, Python doesn’t use arrays but we
                                can easily create one-dimensional and
                                two-dimensional arrays using lists.&nbsp;A list
                                in Python is similar to an array and can be used
                                in similar ways but you can hold different
                                datatypes in a Python list whereas you have to
                                specify what datatype an array will hold when
                                you declare it in other languages.
                              </p>
                              <p>
                                In Python, we can use a nested list (a list
                                inside a list) to create a 2 dimensional array.
                                Here is an example in Python that sets up a list
                                of lists, prints out the elements, then sorts
                                the list and finally, prints out a particular
                                part of one of the elements in myList.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  myList = [["Dave", 32],["Mary", 45],["John",
                                  9],["Fred", 55]] #create the list.
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #print the whole list. There are 4 elements in
                                  myList and each element is a list.
                                </strong>
                                <br />
                                <strong>print(myList[:])</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  for item in myList: #print the list element by
                                  element.
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print(item)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  myList.sort() #sort the list and print it out
                                  again.
                                </strong>
                                <br />
                                <strong>print(myList[:])</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #print the first part of the third element.
                                </strong>
                                <br />
                                <strong>
                                  #remember - Python always starts counting from
                                  zero.
                                </strong>
                                <br />
                                <strong>
                                  print(myList[2][0]) #the [2] gets the third
                                  element in our list, which is [John, 9] and
                                  then the [0] gets the first part of this
                                  element, [John].
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  input("Press &lt;ENTER&gt; to quit
                                  &gt;&gt;&gt; ")
                                </strong>
                              </p>
                              <div>
                                <p>
                                  <strong>Dave, 32</strong> is the first element
                                  in our outer list, and corresponds to the
                                  first row in the 2D array or table.
                                  <br />
                                  <strong>Mary, 45</strong>
                                  is the second element in our outer list and
                                  corresponds to the second row in the table.
                                  <br />
                                  <strong>John, 9</strong>
                                  is the third element.
                                  <br />
                                  <strong>Free, 55</strong>
                                  is the last element.
                                </p>
                                <p>
                                  We can now access any element in the outer
                                  list (any row in the table) e.g. the third row
                                  using
                                </p>
                                <p style="margin-left: 30px">
                                  <strong>myList[2]</strong> &nbsp; #remember
                                  that the first element is zero
                                </p>
                                <p>
                                  This gets us the third row in the table: John,
                                  9
                                </p>
                                <p>
                                  Then we can get the first element of this list
                                  using [0]. The final command to print John is;
                                </p>
                                <p style="margin-left: 30px">
                                  <strong>print (myList[2][0])</strong>
                                </p>
                                <p>
                                  <span style="line-height: 16.3636360168457px">
                                    <strong>
                                      Implementing a 3D array in Python
                                    </strong>
                                    <br />
                                    Things get a little more complicated when we
                                    want to use a 3D array in Python. Although
                                    we can use lists, it's actually a lot easier
                                    to import and use a specialist module called
                                    <strong>
                                      <em>numpy</em>
                                    </strong>
                                    . Numpy allows you to set-up and manipulate
                                    arrays in the classic, programming type of
                                    way. Search Google for
                                    <strong>
                                      <em>numpy</em>
                                    </strong>{" "}
                                    and install it on your own computer to use.
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
    </div>
  );
}

export default Arrays;
