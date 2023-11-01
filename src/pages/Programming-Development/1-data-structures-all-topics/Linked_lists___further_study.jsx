import React from "react";

function Linked_lists___further_study() {
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
                                Linked lists - further study
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                We know that a linked list is a way a computer
                                can keep a set of data in a&nbsp;predefined
                                sequence. It is usually given as an example of a
                                ‘dynamic data structure’ because its size can
                                shrink and grow, unlike&nbsp;a static data
                                structure such as an array. However, linked
                                lists can also be implemented within an array
                                structure. A truly&nbsp;dynamic linked list data
                                structure would use pointers to an area of free
                                space in the main memory called known as the
                                ‘heap’.&nbsp;This is a record of free memory
                                locations that can be used by any program as
                                they need them. When a new location is
                                required,&nbsp;an address can be fetched from
                                the heap. When an item is deleted from a list,
                                the memory location can be returned to the
                                heap&nbsp;for use by other applications. We will
                                look at algorithms that use a linked list in an
                                array. It is a dynamic data structure, in that
                                it can&nbsp;grow and shrink, but is not truly
                                dynamic because the structure is held in a table
                                (an array), so its size is predefined - there
                                are&nbsp;limits to how much it can grow
                                by.&nbsp;Just to remind you of what we said in
                                an earlier chapter, the key features of linked
                                lists are:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      the head of each sequence of data is held
                                      in a 'Head of lists' area of memory
                                    </li>
                                    <li>
                                      the head points to a node, where the first
                                      piece of data (assuming there is one) can
                                      be found
                                    </li>
                                    <li>
                                      each node is made up of a piece of data
                                      and a pointer
                                    </li>
                                    <li>
                                      the pointer points to the memory location
                                      where the next node can be found
                                    </li>
                                    <li>
                                      the end of a list is signalled by a 'null
                                      pointer' . (We've used xxx.)
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Do note that the data in a linked list can be
                                stored all over the memory. They don’t have to
                                be stored together in one block of&nbsp;memory.
                                In the next example, memory locations 200, 132,
                                621 and 834 have been used. This leads to a very
                                efficient use of&nbsp;memory because you can use
                                up all of the gaps between other applications
                                and data files! The downside of this, however,
                                is that&nbsp;they can be slow structures to
                                search through, not only because the data isn’t
                                together but also because you have to
                                serially&nbsp;search through a linked list. That
                                means you have to start at the beginning of the
                                list and work your way through the nodes
                                to&nbsp;find any particular item. In a static
                                structure such as an array, you can access data
                                items directly, without going through all
                                of&nbsp;the other items. For example, here is a
                                linked list of degree courses held
                                alphabetically.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/68720e80-62c7-40b3-a80e-1044820a8accllist1.GIF"
                                  alt="llist1"
                                />
                              </p>
                              <p>
                                <strong>
                                  Creating a new linked list from an old one
                                </strong>
                                <br />
                                So far, we know that:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      linked lists are dynamic data structures
                                    </li>
                                    <li>
                                      each item in the list is known as a node
                                    </li>
                                    <li>
                                      each node has a data part and a pointer
                                      part to it
                                    </li>
                                    <li>
                                      linked Lists must have a start pointer
                                      held in the Head of Lists
                                    </li>
                                    <li>
                                      linked lists must have a Null pointer
                                    </li>
                                    <li>
                                      the Null pointer signals the end of the
                                      list.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                A Linked List is a data structure. You set up
                                the structure by writing programming code. As
                                with any data structure in&nbsp;software, there
                                will be times when you want to do some
                                operations on it. These can include finding a
                                piece of data in the&nbsp;structure, inserting a
                                piece of data, deleting it, printing out all or
                                some of the data items in a structure,
                                re-organising the&nbsp;structure to create new
                                structures and so on.&nbsp;Consider this
                                example. Suppose I want to keep a Linked List of
                                these students (Name, Age, Course) in ascending
                                alphabetical&nbsp;(StudentList) order: Smith,
                                31, Maths; Holmes, 21, English; Sip, 19,
                                History; Kaur, 50, Maths. Here is one way of
                                representing&nbsp;what I want to do (Note that I
                                have picked any ‘free’ memory addresses that
                                were available to use, even though they
                                weren't&nbsp;next to each other):
                              </p>
                              <p>
                                <img
                                  src="images/d7ae3435-f2ed-4bdf-83e5-0c0017437414llist2.GIF"
                                  alt="llist2"
                                />
                              </p>
                              <p>
                                Another (easier?) way of showing this is
                                diagrammatically:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/efd58645-e4f7-4e6a-a874-7b978e7b1971llist3.GIF"
                                  alt="llist3"
                                />
                              </p>
                              <p>
                                Notice the introduction of a new pointer - the
                                NEXTFREE pointer. It simply points to the next
                                available node, the next memory&nbsp;location
                                that could be used to store a data item if I
                                needed to add an item to the linked list. If you
                                start deleting nodes, the&nbsp;NEXTFREE pointer
                                will become important because it will allow you
                                to reuse deleted nodes, rather than leaving
                                unrecoverable&nbsp;space in the data structure.
                                In fact, it is possible to have a linked list of
                                all the free spaces available! So you actually
                                have two&nbsp;linked lists in a data structure -
                                one for the data and one for the free nodes. If
                                I wanted to set up a linked list of free space,
                                I&nbsp;would have the start of the free space
                                pointer in the head of lists pointing to memory
                                location 1. Memory location 1 would&nbsp;point
                                to 5. 5 would point to the next free space, and
                                so on until the null point is reached. We’ll see
                                this again later in this chapter.&nbsp;In the
                                ‘linked list of students’ example, I could print
                                out quickly a list of the students in
                                alphabetical order. I can do that becauseI can
                                follow an alphabetical path. However, I can't
                                easily and quickly get back all the pupils who
                                are doing a Maths course. I&nbsp;don't have a
                                path to follow for that. I don’t have a linked
                                list of Maths pupils. I need to create one from
                                my existing list! How do&nbsp;you describe how
                                this can be set up in software, in pseudo-code
                                or otherwise? The idea is that you create a new
                                head of list in&nbsp;your 'Main Index' table and
                                then you create a new set of pointers to follow!
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      You get the pointer from the head of the
                                      linked list you want to create a new one
                                      from.
                                    </li>
                                    <li>
                                      You check the list isn’t empty by seeing
                                      if it is the null pointer.
                                    </li>
                                    <li>
                                      You follow the pointer to the first node.
                                    </li>
                                    <li>You test the data in that node.</li>
                                    <li>
                                      If it needs to be part of the new list,
                                      then you add it to the new list, adjusting
                                      pointers as necessary.
                                    </li>
                                    <li>
                                      Else you follow that node’s pointer to the
                                      next node, and repeat, until you come to
                                      the end of the list.
                                    </li>
                                    <li>
                                      The final job is to give the last node in
                                      the new list the null pointer.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                A pseudo-code way of writing this might be as
                                follows:
                              </p>
                              <p class="NormalContent">
                                <img
                                  src="images/03cada7d-980d-4063-9c27-7385aae670edllist4.GIF"
                                  alt="llist4"
                                />
                              </p>
                              <p>
                                A diagrammatic representation of the second list
                                would look like this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/c3713589-d659-40c2-924a-59ba97bc2297llist5.GIF"
                                  alt="llist5"
                                />
                              </p>
                              <p>
                                If you want a list of all pupils, you get the
                                START (StudentList) and follow the first
                                pointers. If you want a list of all
                                maths&nbsp;pupils, you get the START (MathsList)
                                and follow the second pointers.
                              </p>
                              <p>
                                <strong>Adding an item to a linked list</strong>
                                <br />
                                Imagine we have a linked list of car
                                manufacturers that we want held in alphabetical
                                order. Imagine that we have decided to&nbsp;keep
                                this information in a linked list. So far, we
                                have entered 4 items. Our linked list looks like
                                this:
                              </p>
                              <p>
                                <img
                                  src="images/85e08447-bd6b-470e-b673-e114fde40d78llist6.GIF"
                                  alt="llist6"
                                />
                              </p>
                              <p>
                                Suppose we want to delete the item Ford, how
                                could we do it? We would simply need to move
                                pointers around. The actual data&nbsp;item Ford
                                will still be in the table! However, no other
                                data item will actually point to it! Refer back
                                to chapter 18 if you are stuck!
                              </p>
                              <p>
                                <strong>More on managing free space</strong>
                                <br />
                                In the previous example, Ford was deleted. That
                                made memory location 3 free. The question now is
                                how to reclaim that&nbsp;memory location. How
                                can we signal to the computer that memory
                                location 3 is now available to use? Managing
                                free space in a&nbsp;linked list is important.
                                We need to keep track of which memory locations
                                are free, or become free, so that we can add new
                                data&nbsp;items to the linked list. If a data
                                item is removed from a memory location in a
                                linked list then we must not only remove it
                                from&nbsp;the linked list of data but we must
                                also add it to a linked list of free space! If
                                we didn’t do this, memory locations would be
                                lost&nbsp;to the computer! This would not be a
                                very efficient use of our RAM.
                              </p>
                              <p>
                                <strong>
                                  An example of managing free space
                                </strong>
                                <br />
                                We will use the example of car manufacturers in
                                alphabetical order. The empty linked list looks
                                like this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  src="images/b70a2962-fa23-40ea-b7b1-85480891b3efllist7.GIF"
                                  alt="llist7"
                                />
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
                              <p>
                                Notice that even though there is nothing in the
                                linked list, a linked list of all the available
                                free space exists! After inserting 4 car
                                <br />
                                manufacturers, we have:
                              </p>
                              <p>
                                <img
                                  src="images/a151e0f6-6f71-47a4-a6d8-75e1f262c004llist8.GIF"
                                  alt="llist8"
                                />
                              </p>
                              <p>
                                Can you see that there are two linked lists, one
                                for the data items and one for the free space?
                                Notice that there is a null pointer&nbsp;for the
                                end of the linked list of data items and also a
                                null pointer for the end of the linked list of
                                available free space!
                              </p>
                              <p>
                                <strong>Inserting data</strong>
                                <br />
                                Now we understand how free space is managed, we
                                are in a position to write some algorithms to
                                insert data. We will also need&nbsp;to consider
                                special cases in the algorithm. For example what
                                happens when there is no more free space
                                available, what happens&nbsp;if the item is the
                                first one in the list to be inserted and what
                                happens if the linked list is completely empty,
                                waiting for the first&nbsp;item to be inserted.
                                Suppose we need now to insert Saab into the car
                                manufacturer’s list. The basic algorithm would
                                be:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Put Saab in the position pointed to by
                                      NEXTFREE.
                                    </li>
                                    <li>
                                      Change NEXTFREE so that it contains the
                                      next value in the linked list of free
                                      items.
                                    </li>
                                    <li>
                                      Starting at the head of lists, determine
                                      where Saab should fit in to the linked
                                      list of data.
                                    </li>
                                    <li>
                                      Change Saab's pointer so that it points to
                                      Skoda.
                                    </li>
                                    <li>
                                      Change Peugeot's pointer so that it points
                                      to Saab.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>Special cases</strong>
                                <br />
                                With any algorithm you write, you should always
                                ask yourself what the special cases are and then
                                add pseudo-code to your&nbsp;algorithm to take
                                these into account.&nbsp;
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      What happens if there is no free space
                                      available? At the beginning of the
                                      algorithm, check that the free linked
                                      list&nbsp;is not empty. If it is, report
                                      an error message and then stop.
                                    </li>
                                    <li>
                                      What happens if the item to be inserted is
                                      the first one in the list? Before you
                                      check where a new piece of
                                      data&nbsp;should go, check to see if the
                                      pointer at the HEAD OF LIST is the null
                                      pointer. If it is, then set the pointer
                                      &nbsp; &nbsp; of&nbsp;NEWDATA to be the
                                      null pointer and set the pointer at the
                                      HEAD OF LIST to point to NEWDATA, then
                                      stop.
                                    </li>
                                    <li>
                                      What happens if an item to be inserted
                                      needs to go in the first position? Put the
                                      NEWDATA into the position&nbsp;pointed to
                                      by NEXTFREE. Change the HEAD OF LIST to
                                      point to NEWDATA. Make NEWDATA point to
                                      the&nbsp;second item.&nbsp;The trick with
                                      remembering all of this is not to try and
                                      remember algorithms! You should draw
                                      yourself a little linked list, with&nbsp;a
                                      few data items in it. Then run through the
                                      process of inserting a new item, writing
                                      down each step in your algorithm as
                                      you&nbsp;go.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong>
                                  Deleting and amending a data item
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  <img
                                    src="images/f65c013c-1b16-4fdb-9703-48c434c6dfe5llist9.GIF"
                                    alt="llist9"
                                  />
                                </strong>
                              </p>
                              <p>
                                Suppose you want to delete Ford from the list of
                                car manufacturers. The algorithm might look
                                something like this:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Follow the pointers until you find Ford.
                                    </li>
                                    <li>
                                      Change Fiat's pointer to point at Skoda.
                                    </li>
                                    <li>
                                      Change Ford's pointer to point to
                                      NEXTFREE.
                                    </li>
                                    <li>Change NEXTFREE to point to Ford.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>Amending Data</strong>
                                <br />
                                The algorithm is:
                              </p>
                              <p>
                                <img
                                  src="images/c46d7b3e-90ad-4c2a-b920-8e909b99c235llist10.GIF"
                                  alt="llist10"
                                />
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

export default Linked_lists___further_study;
