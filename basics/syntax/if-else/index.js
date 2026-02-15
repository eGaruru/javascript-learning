// If...else statement

// ------------------------------------------------------------
// 1) Basics Syntax
// ------------------------------------------------------------

const age = 18;
// result should be assigned to a variable when the condition is complex or reused
const canDrink = age >= 20;

// Basic if-else
if (canDrink) {
  console.log("You can drink 🍺");
} else {
  // Optional
  console.log("You cannot drink beer. Here is some bubble tea for you 🧋");
}

// Multiple conditions
// Note: Evaluation stops at the first true condition
if (age >= 18) {
  console.log("I'm driving a car 🚗");
} else if (age >= 16) {
  console.log("I'm riding a motorcycle 🛵");
} else if (age >= 12) {
  console.log("I'm riding a bike 🚲");
} else {
  console.log("I'm walking 🚶‍♂️");
}

// ------------------------------------------------------------
// 2) If...else vs Ternary Operator
// ------------------------------------------------------------

const user = {
  nickName: "Garuru",
  isAdmin: false,
};

function enableAdminMode() {
  console.log("Admin mode is setting...");
}

function enableUserMode() {
  console.log("User mode is setting...");
}

// Use if...else for "Behavior" (actions, side effects)
if (user.isAdmin) {
  enableAdminMode();
} else {
  enableUserMode();
}

// Alternative: Logical Operator (use only when short & clear)
user.isAdmin && enableAdminMode();
!user.isAdmin && enableUserMode();

// Use Ternary for "Value Assignment"
const roleName = user.isAdmin ? "Admin" : "User";

// Appendix (Switch): Enum / Fixed string / Number
const FetchStatus = Object.freeze({
  LOAD: "loading",
  SUCCESS: "success",
  FAILED: "failed",
});

const currentStatus = "loading";

switch (currentStatus) {
  case FetchStatus.LOAD:
    console.log("Loading... show progress indicator");
    break;
  case FetchStatus.SUCCESS:
    console.log("Data loading success ... show user page");
    break;
  case FetchStatus.FAILED:
    console.log("Loading failed ... show error page");
    break;
  default:
    console.log("Unknown status");
}

// ------------------------------------------------------------
// 3) Common practical pattern
// ------------------------------------------------------------

// ❌ Nested Ifs (Harder to read)　- array example
function processData(data) {
  if (data) {
    if (data.length) {
      console.log("Data is processing...");
    }
  }
}

// ✅ Early Return (Guard Clauses) - array example
function processData(data) {
  // Fail fast: Handle invalid cases first
  if (!data?.length) return; // if (!data) return; -> if(!data.length) return;

  // Main logic stays at the top level indentation
  console.log("Data is processing...");
}

// ✅ Early Return (Guard Clauses) - object example
function processData(data) {
  if (!data?.items?.length) return;
  // if (!data) return; -> if(!data.item) return; -> if(!data.item.length) return;
  console.log("Data is processing...");
}

// 💡 NOTE: Even if data is null/undefined, no error occurs and undefined is returned
// const items = data?.items;!
