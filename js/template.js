let now = new Date();   

let nowString = now.getFullYear()+(now.getMonth()+1).toString(10).padStart(2,"0")+now.getDate().toString(10).padStart(2,"0")+now.getHours().toString(10).padStart(2,"0")+now.getMinutes().toString(10).padStart(2,"0")+now.getSeconds().toString(10).padStart(2,"0")+now.getMilliseconds().toString(10).padStart(3,"0")+"00";

let CreationDate = now.getFullYear()+"-"+now.getMonth().toString(10).padStart(2,"0")+"-"+now.getDate().toString(10).padStart(2,"0")+"T"+now.getHours().toString(10).padStart(2,"0")+":"+now.getMinutes().toString(10).padStart(2,"0")+":"+now.getSeconds().toString(10).padStart(2,"0");

let NumRows = 0;

let CtrlSum = 0;

let entries = [];

let params = [];

let fields = [];

let content = "";

let row = `      <DrctDbtTxInf>
        <PmtId>
          <EndToEndId>{EndToEndId}</EndToEndId>
        </PmtId>
        <InstdAmt Ccy="EUR">{InstdAmt}</InstdAmt>
        <DrctDbtTx>
          <MndtRltdInf>
            <MndtId>{NIF}</MndtId>
            <DtOfSgntr>{DtOfSgntr}</DtOfSgntr>
          </MndtRltdInf>
        </DrctDbtTx>
        <DbtrAgt>
          <FinInstnId>
            <BIC>{BIC}</BIC>
          </FinInstnId>
        </DbtrAgt>
        <Dbtr>
          <Nm>{Name}</Nm>
          <Id>
            <PrvtId>
              <Othr>
                <Id>{NIF}</Id>
              </Othr>
            </PrvtId>
          </Id>
        </Dbtr>
        <DbtrAcct>
          <Id>
            <IBAN>{IBAN}</IBAN>
          </Id>
        </DbtrAcct>
        <RmtInf>
          <Ustrd>{RmtInf}</Ustrd>
        </RmtInf>
      </DrctDbtTxInf>
`

let header = `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.008.001.02" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <CstmrDrctDbtInitn>
    <GrpHdr>
      <MsgId>{MessageId}</MsgId> 
      <CreDtTm>{CreationDate}</CreDtTm>
      <NbOfTxs>{NumRows}</NbOfTxs>
      <CtrlSum>{CtrlSum}</CtrlSum>
      <InitgPty>
        <Nm>{InitgPtyNm}</Nm>
        <Id>
          <OrgId>
            <Othr>
              <Id>{InitgPtyId}</Id>
              <SchmeNm>
                <Cd>CORE</Cd>
              </SchmeNm>
            </Othr>
          </OrgId>
        </Id>
      </InitgPty>
    </GrpHdr>
    <PmtInf>
      <PmtInfId>{PmtInfId}</PmtInfId>
      <PmtMtd>DD</PmtMtd>
      <NbOfTxs>{NumRows}</NbOfTxs>
      <CtrlSum>{CtrlSum}</CtrlSum>
      <PmtTpInf>
        <SvcLvl>
          <Cd>SEPA</Cd>
        </SvcLvl>
        <LclInstrm>
          <Cd>CORE</Cd>
        </LclInstrm>
        <SeqTp>{SeqTp}</SeqTp>
      </PmtTpInf>
      <ReqdColltnDt>{SeqDate}</ReqdColltnDt>
      <Cdtr>
        <Nm>{InitgPtyNm}</Nm>
      </Cdtr>
      <CdtrAcct>
        <Id>
          <IBAN>{CdtrAcct}</IBAN>
        </Id>
        <Ccy>EUR</Ccy>
      </CdtrAcct>
      <CdtrAgt>
        <FinInstnId>
          <BIC>{CdtrAgtBIC}</BIC>
        </FinInstnId>
      </CdtrAgt>
      <ChrgBr>SLEV</ChrgBr>
      <CdtrSchmeId>
        <Id>
          <PrvtId>
            <Othr>
              <Id>{InitgPtyId}</Id>
              <SchmeNm>
                <Prtry>SEPA</Prtry>
              </SchmeNm>
            </Othr>
          </PrvtId>
        </Id>
      </CdtrSchmeId>
{DrctDbtTxInf}    </PmtInf>
  </CstmrDrctDbtInitn>
</Document>`


