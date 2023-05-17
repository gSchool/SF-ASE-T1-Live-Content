let requestedExit = 0;

for(;;) {
    doImportantThings();
    if (requestedExit > 0) {
        doCleanup();
        break;
    }
    doLessImportantThings();
}

function doLessImportantThings() {
    requestedExit = 1;
}
