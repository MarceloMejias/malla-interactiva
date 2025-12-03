import { Carrera } from '../types';

// Casa Central
import { afi } from './cc/afi';
import { amb } from './cc/amb';
import { arq } from './cc/arq';
import { civ_0 } from './cc/civ_0';
import { constru_0 } from './cc/constru_0';
import { ctciv } from './cc/ctciv';
import { eli_0 } from './cc/eli_0';
import { eli } from './cc/eli';
import { elo_0 } from './cc/elo_0';
import { elo } from './cc/elo';
import { fis_0 } from './cc/fis_0';
import { ica_0 } from './cc/ica_0';
import { icbt } from './cc/icbt';
import { icfis } from './cc/icfis';
import { ici_0 } from './cc/ici_0';
import { ici } from './cc/ici';
import { iciv } from './cc/iciv';
import { icm_0 } from './cc/icm_0';
import { icom_0 } from './cc/icom_0';
import { icom } from './cc/icom';
import { icq_0 } from './cc/icq_0';
import { icq } from './cc/icq';
import { idp } from './cc/idp';
import { inf_0 } from './cc/inf_0';
import { inf } from './cc/inf';
import { lqui } from './cc/lqui';
import { mat_0 } from './cc/mat_0';
import { mat } from './cc/mat';
import { mec } from './cc/mec';
import { met_0 } from './cc/met_0';
import { met } from './cc/met';
import { qui_0 } from './cc/qui_0';
import { tel_0 } from './cc/tel_0';
import { tel } from './cc/tel';

// Viña del Mar
import { fdi } from './vm/fdi';
import { ibt } from './vm/ibt';
import { imi } from './vm/imi';
import { inginf } from './vm/inginf';
import { prla } from './vm/prla';
import { tuconst } from './vm/tuconst';
import { tuinf } from './vm/tuinf';

// Vitacura
import { cind } from './vc/cind';
import { cinf } from './vc/cinf';
import { eli as eli_vc } from './vc/eli';
import { iac } from './vc/iac';
import { icom as icom_vc } from './vc/icom';

// Mapa de todas las carreras
export const allCareers: Record<string, Carrera> = {
  // Casa Central
  'AFI': afi,
  'AMB': amb,
  'ARQ': arq,
  'CIV-0': civ_0,
  'CONSTRU-0': constru_0,
  'CTCIV': ctciv,
  'ELI-0': eli_0,
  'ELI': eli,
  'ELO-0': elo_0,
  'ELO': elo,
  'FIS-0': fis_0,
  'ICA-0': ica_0,
  'ICBT': icbt,
  'ICFIS': icfis,
  'ICI-0': ici_0,
  'ICI': ici,
  'ICIV': iciv,
  'ICM-0': icm_0,
  'ICOM-0': icom_0,
  'ICOM': icom,
  'ICQ-0': icq_0,
  'ICQ': icq,
  'IDP': idp,
  'INF-0': inf_0,
  'INF': inf,
  'LQUI': lqui,
  'MAT-0': mat_0,
  'MAT': mat,
  'MEC': mec,
  'MET-0': met_0,
  'MET': met,
  'QUI-0': qui_0,
  'TEL-0': tel_0,
  'TEL': tel,
  
  // Viña del Mar
  'FDI': fdi,
  'IBT': ibt,
  'IMI': imi,
  'INGINF': inginf,
  'PRLA': prla,
  'TUCONST': tuconst,
  'TUINF': tuinf,
  
  // Vitacura
  'CIND': cind,
  'CINF': cinf,
  'ELI-VC': eli_vc,
  'IAC': iac,
  'ICOM-VC': icom_vc,
};

// Índices por campus
export const careersByCampus = {
  cc: [
    { Nombre: afi.nombre, Link: 'AFI', Color: afi.color },
    { Nombre: amb.nombre, Link: 'AMB', Color: amb.color },
    { Nombre: arq.nombre, Link: 'ARQ', Color: arq.color },
    { Nombre: civ_0.nombre, Link: 'CIV-0', Color: civ_0.color },
    { Nombre: constru_0.nombre, Link: 'CONSTRU-0', Color: constru_0.color },
    { Nombre: ctciv.nombre, Link: 'CTCIV', Color: ctciv.color },
    { Nombre: eli_0.nombre, Link: 'ELI-0', Color: eli_0.color },
    { Nombre: eli.nombre, Link: 'ELI', Color: eli.color },
    { Nombre: elo_0.nombre, Link: 'ELO-0', Color: elo_0.color },
    { Nombre: elo.nombre, Link: 'ELO', Color: elo.color },
    { Nombre: fis_0.nombre, Link: 'FIS-0', Color: fis_0.color },
    { Nombre: ica_0.nombre, Link: 'ICA-0', Color: ica_0.color },
    { Nombre: icbt.nombre, Link: 'ICBT', Color: icbt.color },
    { Nombre: icfis.nombre, Link: 'ICFIS', Color: icfis.color },
    { Nombre: ici_0.nombre, Link: 'ICI-0', Color: ici_0.color },
    { Nombre: ici.nombre, Link: 'ICI', Color: ici.color },
    { Nombre: iciv.nombre, Link: 'ICIV', Color: iciv.color },
    { Nombre: icm_0.nombre, Link: 'ICM-0', Color: icm_0.color },
    { Nombre: icom_0.nombre, Link: 'ICOM-0', Color: icom_0.color },
    { Nombre: icom.nombre, Link: 'ICOM', Color: icom.color },
    { Nombre: icq_0.nombre, Link: 'ICQ-0', Color: icq_0.color },
    { Nombre: icq.nombre, Link: 'ICQ', Color: icq.color },
    { Nombre: idp.nombre, Link: 'IDP', Color: idp.color },
    { Nombre: inf_0.nombre, Link: 'INF-0', Color: inf_0.color },
    { Nombre: inf.nombre, Link: 'INF', Color: inf.color },
    { Nombre: lqui.nombre, Link: 'LQUI', Color: lqui.color },
    { Nombre: mat_0.nombre, Link: 'MAT-0', Color: mat_0.color },
    { Nombre: mat.nombre, Link: 'MAT', Color: mat.color },
    { Nombre: mec.nombre, Link: 'MEC', Color: mec.color },
    { Nombre: met_0.nombre, Link: 'MET-0', Color: met_0.color },
    { Nombre: met.nombre, Link: 'MET', Color: met.color },
    { Nombre: qui_0.nombre, Link: 'QUI-0', Color: qui_0.color },
    { Nombre: tel_0.nombre, Link: 'TEL-0', Color: tel_0.color },
    { Nombre: tel.nombre, Link: 'TEL', Color: tel.color },
  ],
  vm: [
    { Nombre: fdi.nombre, Link: 'FDI', Color: fdi.color },
    { Nombre: ibt.nombre, Link: 'IBT', Color: ibt.color },
    { Nombre: imi.nombre, Link: 'IMI', Color: imi.color },
    { Nombre: inginf.nombre, Link: 'INGINF', Color: inginf.color },
    { Nombre: prla.nombre, Link: 'PRLA', Color: prla.color },
    { Nombre: tuconst.nombre, Link: 'TUCONST', Color: tuconst.color },
    { Nombre: tuinf.nombre, Link: 'TUINF', Color: tuinf.color },
  ],
  sj: [],
  vc: [
    { Nombre: cind.nombre, Link: 'CIND', Color: cind.color },
    { Nombre: cinf.nombre, Link: 'CINF', Color: cinf.color },
    { Nombre: eli_vc.nombre, Link: 'ELI-VC', Color: eli_vc.color },
    { Nombre: iac.nombre, Link: 'IAC', Color: iac.color },
    { Nombre: icom_vc.nombre, Link: 'ICOM-VC', Color: icom_vc.color },
  ],
  cp: [],
};

// Función helper para obtener una carrera
export function getCareer(code: string): Carrera | undefined {
  return allCareers[code.toUpperCase()];
}
