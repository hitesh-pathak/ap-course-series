import clsx from 'clsx';
import { BtnRound } from '../common/Button';
import { Link } from 'react-router-dom';
import { SpanTextEn } from '../Typography/common';

export default function DonateBtn() {
  return (
    <BtnRound
      className={clsx(
        'md:hidden rounded',
        'border-[1.5px] border-white',
        'px-2 py-0 text-sm text-white'
      )}
    >
      <Link to={'/'}>
        <SpanTextEn>Donate</SpanTextEn>
      </Link>
    </BtnRound>
  );
}
