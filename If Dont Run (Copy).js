class MyExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'myExtension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'doSomething',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'do something',
                }
            ]
        };
    }

    doSomething() {
        // Code to do something when the block is used
    }
}

Scratch.extensions.register(new MyExtension());
