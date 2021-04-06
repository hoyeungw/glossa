import { CodeToChs, CodeToEst as CodeToEst$1, CodeToSector } from '@glossa/c12n-fin-shenwan';
import { CodeToEst, CodeToArea } from '@glossa/c12n-fin-tush';
import { CodeToConcepts } from '@glossa/c12n-fin-sina';
import { CodeToEng } from '@glossa/index-fin-hs300';
import { Table } from '@analys/table';
import { SYMBOL, CHS, EST, SECTOR, CONCEPTS, AREA, ENG } from '@glossa/enum-fin';
import { dateToDash } from '@valjoux/convert';

const initC12ns = () => {
  const head = [SYMBOL, CHS, EST, SECTOR, CONCEPTS, AREA, ENG];
  const rows = Object.entries(CodeToChs).map(([code, chs]) => {
    var _CodeToEst$code, _Date;

    return [code, chs, (_CodeToEst$code = CodeToEst[code]) !== null && _CodeToEst$code !== void 0 ? _CodeToEst$code : (_Date = new Date(CodeToEst$1[code]), dateToDash(_Date)), CodeToSector[code], CodeToConcepts[code], CodeToArea[code], CodeToEng[code]];
  });
  return Table.from({
    head,
    rows
  });
};

export { initC12ns };
