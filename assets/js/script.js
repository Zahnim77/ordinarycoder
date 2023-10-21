$(document).ready(function() {
    /* Home Section - btnContact transition content */
    $('#btnContact').hover(function() {
        $(this).text('minhaz.060@gmail.com');
    }, function() {
        $(this).text('CONTACT ME');
    });

    // Word Flick
    var words = ['Hi', 'My Name is', 'MD Minhaz Alam', 'I can create website as you need', 'This is my'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            }
            else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                }
                else {
                    offset--;
                }
            }
            $('.word').text(part);
        }, speed);
    };

    wordflick();

    /* Data for Zing Chart - chartSkills in Skills Section */
    ZC.LICENSE = ['7b185ca19b4be2cba68fdcd369c663a9'];

    /* Colors */
    var white = '#fff';
    var transparent = 'transparent';
    var lightRed = '#e84855';

    /* Chart Skills */
    var chartSkillsData = {
        type: 'radar',
        globals: {
            fontFamily: 'Raleway',
        },
        backgroundColor: transparent,
        plot: {
            aspect: 'area',
            alphaArea: '.6',
        },
        scaleK: {
            labels: ['PHP', 'MySQL', 'WordPress', 'JavaScript', 'Laravel', 'Vue', 'Caspio'],
            item: {
                fontColor: white,
                rules: [{
                    rule: '%i == 0 || %i == 1 || %i == 5 || %i == 6',
                    fontColor: lightRed
                }]
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent,
            },
            tick: {
                lineColor: white
            }
        },
        scaleV: {
            item: {
                visible: false
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent
            }
        },
        series: [{
            values: [75, 80, 60, 85, 65, 70, 90],
            backgroundColor: lightRed,
            lineColor: lightRed,
            legendItem: {
                fontColor: lightRed
            }
        }]
    }

    zingchart.render({
        id: 'chartSkills',
        data: chartSkillsData,
        height: '100%',
        width: '100%'
    });



});