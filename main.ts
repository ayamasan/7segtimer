input.onButtonPressed(Button.A, function () {
    if (タイマー設定 == 0) {
        if (分セット < 4) {
            分セット += 1
        } else {
            分セット = 0
        }
    } else {
        if (動作 == 0) {
            動作 += 1
        } else {
            動作 = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (タイマー設定 == 0) {
        動作 = 0
        タイマー設定 = 1
    } else {
        タイマー設定 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (タイマー設定 == 0) {
        if (秒セット < 50) {
            秒セット += 10
        } else {
            秒セット = 0
        }
    } else {
        if (動作 == 0) {
            分 = 分セット
            秒 = 秒セット
        }
    }
})
let 動作 = 0
let 秒 = 0
let 分 = 0
let 秒セット = 0
let 分セット = 0
let タイマー設定 = 0
let _4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
_4digit.point(true)
_4digit.set(7)
_4digit.show(0)
タイマー設定 = 0
分セット = 0
秒セット = 0
分 = 0
秒 = 0
let コロン = 1
動作 = 0
basic.forever(function () {
    if (動作 == 1) {
        if (分 == 0 && 秒 == 0) {
            if (コロン == 1) {
                music.playTone(988, music.beat(BeatFraction.Whole))
            }
        } else {
            if (秒 > 0) {
                秒 += -1
            } else if (分 > 0) {
                分 += -1
                秒 = 59
            }
        }
        _4digit.show(分 * 100 + 秒)
        if (コロン == 0) {
            コロン = 1
            _4digit.point(true)
        } else {
            コロン = 0
            _4digit.point(false)
        }
        basic.pause(1000)
    } else if (タイマー設定 == 1) {
        _4digit.show(分セット * 100 + 秒セット)
        basic.pause(400)
        _4digit.clear()
        basic.pause(200)
    } else {
        コロン = 1
        _4digit.point(true)
        basic.pause(1000)
    }
})
