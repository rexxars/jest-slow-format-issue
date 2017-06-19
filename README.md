Illustrates a slow code path when comparing stuff that contains a large buffer in jest.

Usage:

```
git clone https://github.com/rexxars/jest-slow-format-issue.git
cd jest-slow-format-issue
yarn
npm test
```

To run a flame graph profiler on it:

```
npm run profile
```

Then press Ctrl + C once you get the "Press ctrl + c within 10 seconds" message.
