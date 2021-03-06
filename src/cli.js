import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--mainframe': Boolean,
     '--change': Boolean,
     '--exit': Boolean,
     '--noconfirm': Boolean,
     '-m': '--mainframe',
     '-c': '--change',
     '-e': '--exit',
     '-n': '--noconfirm',
   },
   {
     argv: rawArgs.slice(2),
   }
 );
 return {
   mainframe: args['--mainframe'] || false,
   change: args['--change'] || false,
   exit: args['--exit'] || false,
   noconfirm: args['--noconfirm'] || false,
 };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function getReturn(options) {
    var endlog = [
      'Heking...'
    ]
    const emails = [
        "bigbossperson@gmail.com",
        "carsextendedwarrenty@gmail.com",
        "heckercantgethere@hotmail.com",
        "example@example.net"
    ]
    const passwords = [
        "githek",
        "wehavebeentryingtoreachyou",
        "noheck",
        "imjustanexamplelel"
    ]
    if(options.mainframe === true) {
        await endlog.push('Locating server location...\n');
        await endlog.push('Finding Database...\n');
        await endlog.push('Finding Email...\n');
        await endlog.push(`Email = ${emails[getRandomInt(emails.length)]}...\n`);
        await endlog.push(`Password = ${passwords[getRandomInt(passwords.length)]}...\n`);
        await endlog.push(`Inside database.\n`);
    }
    if(options.change === true) {
        await endlog.push('Changing passwords...\n');
        await endlog.push('Finding suceptible accounts..\n');
        await endlog.push('Adding search history\n');
        await endlog.push('Messing with test scores\n');
        await endlog.push('Change completed\n');
    }
    if(options.exit === true) {
        await endlog.push('Checking traces\n');
        await endlog.push('Wiping Data\n');
        await endlog.push('Clearing evidence\n');
        await endlog.push('Logging out\n');
        await endlog.push('Out with no evidence\n');
    }
    if(options.noconfirm === false) {
      endlog.push('The totally real hack is complete.')
    }
    for(let i = 0; i < endlog.length; i++) {
        console.log(endlog[i])
        sleep(getRandomInt(100) + 200)
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

export function cli(args) {
 let options = parseArgumentsIntoOptions(args);
 getReturn(options)
}