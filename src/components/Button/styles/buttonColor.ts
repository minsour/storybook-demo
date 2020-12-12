const palette = {
    gray0: '#F8F9FA',
    gray1: '#F1F3F5',
    gray2: '#E9ECEF',
    gray3: '#DEE2E6',
    gray4: '#CED4DA',
    gray5: '#ADB5BD',
    gray6: '#868E96',
    gray7: '#495057',
    gray8: '#343A40',
    gray9: '#212529',
};

const colorBreakPoints = {
    white: `
        background: ${palette.gray2};
        color: ${palette.gray7};
        &:hover {
            background: ${palette.gray1};
        }
    `,
    dark: `
        background: ${palette.gray6};
        color: ${palette.gray0};
        &:hover {
            background: ${palette.gray5};
        }
    `
};

export const buttonColor = (key: keyof typeof colorBreakPoints) => {
    return colorBreakPoints[key]
};