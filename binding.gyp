{
  'includes': [ 'binding.gypi' ],

  'targets': [
    { # CUTILS
      'target_name': 'cutils',
      'sources': [ 'src/node_addons/cutils/src/cutils.cc' ]
    },
    { # BIGWIG
      'target_name': 'bigwig',
      'sources': [ 'src/node_addons/bigwig/src/bigwig.cc' ],
      'libraries': [ '-lpthread', '-lz', '-lm' ],
      'dependencies': [ 'jk' ],
    },
    { # WIGTOBIGWIG
      'target_name': 'wigToBigWig',
      'type': 'executable',
      'sources': [ 'src/vendor/utils/wigToBigWig/src/wigToBigWig.c' ],
      'include_dirs': [ 'src/vendor/utils/wigToBigWig/inc/' ],
      'libraries': [ '-lpthread', '-lz', '-lm' ],
      'dependencies': [ 'jk' ],
      'postbuilds': [
        {
          'postbuild_name': 'Copy to ./bin',
          'action': [
            'cp',
            '${BUILT_PRODUCTS_DIR}/${EXECUTABLE_PATH}',
            '${SRCROOT}bin/wigToBigWig'
          ]
        }
      ]
    },
    { # JK
      'target_name': 'jk',
      'type': 'static_library',
      'sources': [ '<@(jk_files)' ],
      'libraries': [ '-lpthread', '-lz', '-lm' ],
      'include_dirs': [ 'src/vendor/lib/jk/inc' ],
      'direct_dependent_settings': {
        'include_dirs': [ 'src/vendor/lib/jk/inc/' ]
      },
    }
  ]
}

