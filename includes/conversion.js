function convertCurrency(TCURF_P08, TCURR_P08, sourceUnit, targetUnit, amount, referenceDate) {
//   const TCURR_P08 = 'bcs-customer360-dev.h2r_stage.TCURR_P08';
//   const TCURF_P08 = 'bcs-customer360-dev.h2r_stage.TCURF_P08';
//   const TCURV_P08 = 'bcs-customer360-dev.h2r_stage.TCURV_P08';
//   const TCURX_P08 = 'bcs-customer360-dev.h2r_stage.TCURX_P08';
  
return `
    SELECT IFNULL(
        ${amount} * (
          SELECT UKURS
          FROM ${TCURR_P08}
          WHERE KURST = 'P'
            AND FCURR = ${sourceUnit}
            AND TCURR = ${targetUnit}
            AND GDATU = ${referenceDate}
        ),
        NULL
      ) * (
        SELECT TFACT / FFACT
        FROM ${TCURF_P08}
        WHERE KURST = 'P'
          AND FCURR = ${sourceUnit}
          AND TCURR = ${targetUnit}
          `;
}
module.exports = { convertCurrency };
