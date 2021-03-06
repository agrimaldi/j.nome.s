{
  'target_defaults': {
    'default_configuration': 'Release',
    'defines': [
      '_FILE_OFFSET_BITS=64',
      '_LARGEFILE_SOURCE',
      '_GNU_SOURCE'
    ],
    'configurations': {
      'Debug': {
        'cflags': [ '-Wall', '-O0', '-g' ],
        'xcode_settings': {
          'GCC_OPTIMISATION_LEVEL': '0',
          'GCC_GENERATE_DEBUGGING_SYMBOLS': 'YES',
          'WARNING_CFLAGS': [ '-Wall' ],
        },
      },
      'Release': {
        'cflags!': [ '-g' ],
        'cflags': [ '-O3' ],
        'xcode_settings': {
          'GCC_OPTIMISATION_LEVEL': '3',
          'GCC_GENERATE_DEBUGGING_SYMBOLS': 'NO',
        },
      },
    },
  },

  'variables': {
    'jk_files': [
      #'src/vendor/lib/jk/src/aliType.c',
      #'src/vendor/lib/jk/src/annoColumn.c',
      #'src/vendor/lib/jk/src/annoFilter.c',
      #'src/vendor/lib/jk/src/annoFormatTab.c',
      #'src/vendor/lib/jk/src/annoFormatter.c',
      #'src/vendor/lib/jk/src/annoGrator.c',
      #'src/vendor/lib/jk/src/annoGratorQuery.c',
      #'src/vendor/lib/jk/src/annoOption.c',
      #'src/vendor/lib/jk/src/annoRow.c',
      #'src/vendor/lib/jk/src/annoStreamer.c',
      #'src/vendor/lib/jk/src/annoStreamVcf.c',
      #'src/vendor/lib/jk/src/apacheLog.c',
      #'src/vendor/lib/jk/src/asParse.c',
      #'src/vendor/lib/jk/src/axtAffine.c',
      #'src/vendor/lib/jk/src/axt.c',
      #'src/vendor/lib/jk/src/bamFile.c',
      'src/vendor/lib/jk/src/base64.c',
      'src/vendor/lib/jk/src/basicBed.c',
      'src/vendor/lib/jk/src/bbiRead.c',
      'src/vendor/lib/jk/src/bbiWrite.c',
      'src/vendor/lib/jk/src/bigBed.c',
      #'src/vendor/lib/jk/src/binRange.c',
      'src/vendor/lib/jk/src/bits.c',
      #'src/vendor/lib/jk/src/blastOut.c',
      #'src/vendor/lib/jk/src/blastParse.c',
      #'src/vendor/lib/jk/src/boxClump.c',
      #'src/vendor/lib/jk/src/boxLump.c',
      'src/vendor/lib/jk/src/bPlusTree.c',
      'src/vendor/lib/jk/src/bwgCreate.c',
      'src/vendor/lib/jk/src/bwgQuery.c',
      'src/vendor/lib/jk/src/bwgValsOnChrom.c',
      #'src/vendor/lib/jk/src/cda.c',
      #'src/vendor/lib/jk/src/chainBlock.c',
      #'src/vendor/lib/jk/src/chain.c',
      #'src/vendor/lib/jk/src/chainConnect.c',
      #'src/vendor/lib/jk/src/chainToAxt.c',
      #'src/vendor/lib/jk/src/chainToPsl.c',
      'src/vendor/lib/jk/src/cheapcgi.c',
      'src/vendor/lib/jk/src/cirTree.c',
      #'src/vendor/lib/jk/src/codebias.c',
      'src/vendor/lib/jk/src/colHash.c',
      'src/vendor/lib/jk/src/common.c',
      #'src/vendor/lib/jk/src/correlate.c',
      'src/vendor/lib/jk/src/crTree.c',
      'src/vendor/lib/jk/src/dgRange.c',
      #'src/vendor/lib/jk/src/diGraph.c',
      'src/vendor/lib/jk/src/dlist.c',
      #'src/vendor/lib/jk/src/dnaLoad.c',
      #'src/vendor/lib/jk/src/dnaMarkov.c',
      #'src/vendor/lib/jk/src/dnaMotif.c',
      #'src/vendor/lib/jk/src/dnaseq.c',
      #'src/vendor/lib/jk/src/dnautil.c',
      #'src/vendor/lib/jk/src/dtdParse.c',
      'src/vendor/lib/jk/src/dystring.c',
      #'src/vendor/lib/jk/src/emblParse.c',
      'src/vendor/lib/jk/src/errabort.c',
      'src/vendor/lib/jk/src/errCatch.c',
      #'src/vendor/lib/jk/src/fa.c',
      #'src/vendor/lib/jk/src/ffAli.c',
      #'src/vendor/lib/jk/src/ffScore.c',
      'src/vendor/lib/jk/src/filePath.c',
      #'src/vendor/lib/jk/src/fixColor.c',
      #'src/vendor/lib/jk/src/flydna.c',
      #'src/vendor/lib/jk/src/fof.c',
      #'src/vendor/lib/jk/src/fuzzyShow.c',
      #'src/vendor/lib/jk/src/gapCalc.c',
      #'src/vendor/lib/jk/src/gdf.c',
      #'src/vendor/lib/jk/src/gemfont.c',
      #'src/vendor/lib/jk/src/genomeRangeTree.c',
      #'src/vendor/lib/jk/src/gff3.c',
      #'src/vendor/lib/jk/src/gff.c',
      #'src/vendor/lib/jk/src/gfNet.c',
      #'src/vendor/lib/jk/src/gfxPoly.c',
      #'src/vendor/lib/jk/src/gifcomp.c',
      #'src/vendor/lib/jk/src/gifdecomp.c',
      #'src/vendor/lib/jk/src/gifLabel.c',
      #'src/vendor/lib/jk/src/gifread.c',
      #'src/vendor/lib/jk/src/gifwrite.c',
      'src/vendor/lib/jk/src/hacTree.c',
      'src/vendor/lib/jk/src/hash.c',
      #'src/vendor/lib/jk/src/histogram.c',
      #'src/vendor/lib/jk/src/hmmPfamParse.c',
      'src/vendor/lib/jk/src/hmmstats.c',
      #'src/vendor/lib/jk/src/htmlPage.c',
      #'src/vendor/lib/jk/src/htmshell.c',
      'src/vendor/lib/jk/src/https.c',
      'src/vendor/lib/jk/src/internet.c',
      'src/vendor/lib/jk/src/intExp.c',
      'src/vendor/lib/jk/src/intValTree.c',
      #'src/vendor/lib/jk/src/itsa.c',
      #'src/vendor/lib/jk/src/iupac.c',
      #'src/vendor/lib/jk/src/jointalign.c',
      #'src/vendor/lib/jk/src/jpegSize.c',
      #'src/vendor/lib/jk/src/keys.c',
      'src/vendor/lib/jk/src/knetUdc.c',
      'src/vendor/lib/jk/src/kxTok.c',
      'src/vendor/lib/jk/src/linefile.c',
      'src/vendor/lib/jk/src/lineFileOnBigBed.c',
      'src/vendor/lib/jk/src/localmem.c',
      'src/vendor/lib/jk/src/log.c',
      #'src/vendor/lib/jk/src/maf.c',
      #'src/vendor/lib/jk/src/mafFromAxt.c',
      #'src/vendor/lib/jk/src/mafScore.c',
      'src/vendor/lib/jk/src/md5.c',
      'src/vendor/lib/jk/src/memalloc.c',
      #'src/vendor/lib/jk/src/memgfx.c',
      'src/vendor/lib/jk/src/metaWig.c',
      #'src/vendor/lib/jk/src/mgCircle.c',
      #'src/vendor/lib/jk/src/mgPolygon.c',
      'src/vendor/lib/jk/src/mime.c',
      'src/vendor/lib/jk/src/net.c',
      #'src/vendor/lib/jk/src/nib.c',
      #'src/vendor/lib/jk/src/nibTwo.c',
      #'src/vendor/lib/jk/src/nt4.c',
      #'src/vendor/lib/jk/src/numObscure.c',
      'src/vendor/lib/jk/src/obscure.c',
      #'src/vendor/lib/jk/src/oldGff.c',
      #'src/vendor/lib/jk/src/oligoTm.c',
      'src/vendor/lib/jk/src/options.c',
      'src/vendor/lib/jk/src/osunix.c',
      #'src/vendor/lib/jk/src/oswin9x.c',
      #'src/vendor/lib/jk/src/pairHmm.c',
      #'src/vendor/lib/jk/src/peakCluster.c',
      #'src/vendor/lib/jk/src/phyloTree.c',
      'src/vendor/lib/jk/src/pipeline.c',
      #'src/vendor/lib/jk/src/pngwrite.c',
      'src/vendor/lib/jk/src/portimpl.c',
      #'src/vendor/lib/jk/src/pscmGfx.c',
      #'src/vendor/lib/jk/src/psGfx.c',
      #'src/vendor/lib/jk/src/psl.c',
      #'src/vendor/lib/jk/src/pslGenoShow.c',
      #'src/vendor/lib/jk/src/pslShow.c',
      #'src/vendor/lib/jk/src/pslTbl.c',
      #'src/vendor/lib/jk/src/pslTransMap.c',
      #'src/vendor/lib/jk/src/psPoly.c',
      #'src/vendor/lib/jk/src/pthreadWrap.c',
      #'src/vendor/lib/jk/src/qa.c',
      #'src/vendor/lib/jk/src/quickHeap.c',
      #'src/vendor/lib/jk/src/quotedP.c',
      #'src/vendor/lib/jk/src/ra.c',
      #'src/vendor/lib/jk/src/rainbow.c',
      'src/vendor/lib/jk/src/rangeTree.c',
      'src/vendor/lib/jk/src/rbTree.c',
      'src/vendor/lib/jk/src/regexHelper.c',
      #'src/vendor/lib/jk/src/repMask.c',
      #'src/vendor/lib/jk/src/rle.c',
      #'src/vendor/lib/jk/src/rnautil.c',
      #'src/vendor/lib/jk/src/rqlEval.c',
      #'src/vendor/lib/jk/src/rqlParse.c',
      'src/vendor/lib/jk/src/rudp.c',
      'src/vendor/lib/jk/src/scoreWindow.c',
      'src/vendor/lib/jk/src/seg.c',
      #'src/vendor/lib/jk/src/seqOut.c',
      #'src/vendor/lib/jk/src/seqStats.c',
      'src/vendor/lib/jk/src/servBrcMcw.c',
      'src/vendor/lib/jk/src/servcis.c',
      'src/vendor/lib/jk/src/servcl.c',
      'src/vendor/lib/jk/src/servCrunx.c',
      'src/vendor/lib/jk/src/servmsII.c',
      'src/vendor/lib/jk/src/servpws.c',
      'src/vendor/lib/jk/src/shaRes.c',
      'src/vendor/lib/jk/src/slog.c',
      'src/vendor/lib/jk/src/snof.c',
      'src/vendor/lib/jk/src/snofmake.c',
      'src/vendor/lib/jk/src/snofsig.c',
      #'src/vendor/lib/jk/src/spacedColumn.c',
      #'src/vendor/lib/jk/src/spacedSeed.c',
      #'src/vendor/lib/jk/src/spaceSaver.c',
      #'src/vendor/lib/jk/src/splatAli.c',
      'src/vendor/lib/jk/src/sqlList.c',
      'src/vendor/lib/jk/src/sqlNum.c',
      #'src/vendor/lib/jk/src/subText.c',
      #'src/vendor/lib/jk/src/sufa.c',
      #'src/vendor/lib/jk/src/sufx.c',
      #'src/vendor/lib/jk/src/synQueue.c',
      #'src/vendor/lib/jk/src/tabRow.c',
      #'src/vendor/lib/jk/src/textOut.c',
      #'src/vendor/lib/jk/src/tokenizer.c',
      #'src/vendor/lib/jk/src/trix.c',
      #'src/vendor/lib/jk/src/twoBit.c',
      'src/vendor/lib/jk/src/udc.c',
      'src/vendor/lib/jk/src/vcf.c',
      'src/vendor/lib/jk/src/verbose.c',
      #'src/vendor/lib/jk/src/vGfx.c',
      #'src/vendor/lib/jk/src/vGif.c',
      #'src/vendor/lib/jk/src/vPng.c',
      'src/vendor/lib/jk/src/wildcmp.c',
      #'src/vendor/lib/jk/src/wormdna.c',
      #'src/vendor/lib/jk/src/xa.c',
      #'src/vendor/lib/jk/src/xAli.c',
      #'src/vendor/lib/jk/src/xap.c',
      #'src/vendor/lib/jk/src/xenshow.c',
      #'src/vendor/lib/jk/src/xmlEscape.c',
      #'src/vendor/lib/jk/src/xp.c',
      'src/vendor/lib/jk/src/zlibFace.c'
    ]
  }
}
