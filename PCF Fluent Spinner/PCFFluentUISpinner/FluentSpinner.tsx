import * as React from 'react';
import { Spinner, SpinnerSize, SpinnerLabelPosition } from '@fluentui/react/lib/Spinner';

export interface IFluentSpinnerProps {
  visible: boolean;
  spinnerSize: SpinnerSize;
  spinnerLabel: string | undefined;
  spinnerLabelPosition: SpinnerLabelPosition;
};
export const FluentSpinner: React.FunctionComponent = (props: any) => {
  // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
  const propsCasted = props as IFluentSpinnerProps;

  return (
    <div>
      {propsCasted.visible && <Spinner size={propsCasted.spinnerSize} label={propsCasted.spinnerLabel} labelPosition={propsCasted.spinnerLabelPosition}></Spinner>}
    </div>
  );
};
