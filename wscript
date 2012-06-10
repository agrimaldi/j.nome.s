#!/usr/bin/env python

import Options
from os import unlink, symlink, popen
from os.path import exists

srcdir = "."
blddir = "./build"
VERSION = "0.0.1"

def set_options(opt):
    opt.tool_options("compiler_cxx")

def configure(conf):
    conf.check_tool("compiler_cxx")
    conf.check_tool("node_addon")

def build(bld):
    build_cutils(bld)
    build_bigwig(bld)

def shutdown():
    if Options.commands['clean']:
        for i in ['./lib/cutils.node', './lib/bigwig.node']:
            if exists(i):
                unlink(i)
    else:
        for i in ['cutils.node', 'bigwig.node']:
            if exists('./build/default/'+i) and not exists('./lib/'+i):
                symlink('../build/default/'+i, './lib/'+i)



def build_cutils(bld):
    bld.new_task_gen("cxx", "shlib", "node_addon",
        includes = './addons/cutils/inc',
        staticlibpath = [ './addons/cutils/lib' ],
        target = 'cutils',
        source = 'addons/cutils/src/cutils.cc',
        cxxflags = [
            '-D_FILE_OFFSET_BITS=64',
            '-D_LARGEFILE_SOURCE',
            '-Wall',
            '-O3'
        ]
    )

def build_bigwig(bld):
    bld.new_task_gen("cxx", "shlib", "node_addon",
        includes = 'addons/bigwig/inc',
        lib = [ 'jkweb' ],
        libpath = [ 'default/addons/bigwig/lib' ],
        target = 'bigwig',
        source = 'addons/bigwig/src/bigwig.cc',
        cxxflags = [
            '-D_FILE_OFFSET_BITS=64',
            '-D_LARGEFILE_SOURCE',
            '-Wall',
            '-O3'
        ]
    )
