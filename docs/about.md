### What is j.nome.s

j.nome.s is a fast, simple, lightweight genome browser.
It is built on top of [expressjs][expressjs] and [Node.JS][nodejs],
and uses [MongoDB][mongodb] for storing the data.

### Why j.nome.s

Current genome browsers include [GBrowse][gbrowse], the [UCSC genome browser][ucsc_browser]
or [Jbrowse][jbrowse]. The main problem with those project, is that they
heavily rely on [perl][perl] and [BioPerl][bioperl] scripts in order to both crunch data
and render the output.
Although [perl][perl] is widely used by bioinformaticians, it is a very inelegant
language, very often leading to bloatware.
Representing genomes is not an easy task considering the huge amout of data
that has to be handled and shown in an intelligible way.

j.nome.s aims to provide a simple genome browser environment, convenient to
both the user, and the developer.
It is based on [Node.JS][nodejs], which allowed to build a custom non
IO-blocking server application. The data is stored in a 
[MongoDB][mongodb] database, providing a scallable and
efficient way to respectively store and access huge amount of data.

### Who

j.nome.is is an ongoing project initiated by Alexis GRIMALDI and Avetis
KAZARIAN.

### Change log
  
#### v0.3.0 : 2011-06-18
* Possibility to reorder tracks by drag & drop
* The order of tracks is remembered
* query and render only new selected tracks is view does not change
* Favicon redesigned
* Display overlapping elements of a track on different Y-axis.

#### v0.2.0 : 2011-06-14
* Fixed selection going beyond boundaries
* Fixed non-existing SEQID
* Fixed SEQID position overflow
* Use ID instead of name in track rendering
* Display the track name in the SVG canvas
* Use configuration files for styles
* Handle 500 and 404 errors
* Link to generated API documentation
* Wrote 'about' section
* Wrote 'documentation' section
* Wrote package.json to keep track of dependencies

#### v0.1 : 2011-06-11
* Navigation via rulers


[gbrowse]: http://www.gbrowse.org/index.html
[ucsc_browser]: http://genome.ucsc.edu/
[jbrowse]: http://jbrowse.org/
[perl]: http://www.perl.org/
[bioperl]: http://www.bioperl.org/
[expressjs]: http://expressjs.com/
[nodejs]: http://nodejs.org/
[mongodb]: http://www.mongodb.org/
