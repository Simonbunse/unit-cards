import { Trait } from '../types/traits';

export interface TraitData {
  name: Trait;
  cost: number;
  description: string;
}
export interface CustomTrait {
  name: string;
  description: string;
  cost: number;
}
export const traitData: TraitData[] = [
  { name: 'AAAUUUGH!!!', description: 'When this unit breaks, all adjacent units suffer 1 casualty.', cost: 0 },
  { name: 'Adaptable', description: 'This unit has advantage on Morale and Command tests.', cost: 0 },
  { name: 'Aerial Bombardment', description: 'If this unit spends an activation doing nothing, it can use its next activation to target a fortification by making a DC 13 Power test. On a success, it deals 1d4 + 2 damage to the fortification.', cost: 0 },
  { name: 'Amphibious', description: 'This unit does not suffer movement penalties when fighting underwater, or in rain or mud.', cost: 0 },
  { name: 'Arcadian', description: 'This unit has advantage on Power tests to resist battle magic.', cost: 0 },
  { name: 'Archers', description: 'This unit can attack any opposed unit. Successful Power tests the unit makes against opposed units that are not exposed inflict only 1 casualty.', cost: 0 },
  { name: 'Armored Carapace', description: 'This unit suffers no casualties from artillery Attack tests.', cost: 0 },
  { name: 'Barbs', description: 'An opposed infantry unit that makes a successful Power test as part of an attack against this unit suffers 1 casualty.', cost: 0 },
  { name: 'Battle Hymn', description: 'This unit has a bonus to Morale equal to its commander’s domain size, as do allied units while adjacent.', cost: 0 },
  { name: 'Better than One', description: 'When this unit attacks an opposed unit, it can also attack any other adjacent opposed unit.', cost: 0 },
  { name: 'Big', description: 'This unit has advantage on Power tests against units whose casualties are lower than this unit’s.', cost: 0 },
  { name: 'Blanket Fire', description: 'As an action, choose a rank on the battlefield. Attack each unit in that rank. Recharge 4–6.', cost: 0 },
  { name: 'Blinding', description: 'When an opposed unit fails an Attack test against this unit, the opposed unit is disoriented.', cost: 0 },
  { name: 'Burning', description: 'Each opposed unit that activates adjacent to this unit suffers 1 casualty.', cost: 0 },
  { name: 'Burrow', description: 'As an action, remove this unit from the battlefield. On its next activation, place it in any empty space. It is disoriented until the end of that activation.', cost: 0 },
  { name: 'Chaos Vulnerability', description: 'This unit has disadvantage on Power tests to resist battle magic.', cost: 0 },
  { name: 'Charge', description: 'If this unit moves at least 1 space before it attacks, it has advantage on Attack tests for the activation.', cost: 0 },
  { name: 'Chorus of Victory', description: 'As an action, choose a rank. Each allied unit in that rank increments its casualty die and has advantage on Attack tests until its next activation. Recharge 6.', cost: 0 },
  { name: 'Close Range', description: 'This unit has advantage on Attack tests and Power tests against adjacent units.', cost: 0 },
  { name: 'Cloud of Darkness', description: 'Opposed units have disadvantage on Attack tests against this unit.', cost: 0 },
  { name: 'Collateral Damage', description: 'When this unit succeeds on a Power test vs infantry or artillery, the unit opposite also suffers 1 casualty.', cost: 0 },
  { name: 'Consume', description: 'As an action, choose an adjacent opposed unit with lower casualties. That unit must succeed on a DC 15 Power test or break. Recharge 5–6.', cost: 0 },
  { name: 'Corrode', description: 'A successful Attack test reduces the target’s Attack and Defense by 2 (once per battle per unit).', cost: 0 },
  { name: 'Corrosive Breath', description: 'As an action, choose three adjacent opposed units. Each must make a Power test (DC = 8 + size) or suffer 2 casualties and gain an acid token. Recharge 5–6.', cost: 0 },
  { name: 'Create Dead', description: 'If this unit causes an opposed unit to break, replace that unit with a Ghoul Infantry unit.', cost: 0 },
  { name: 'Damage Resistant', description: 'Successful Attack tests deal no casualties to this unit; Power tests affect it normally.', cost: 0 },
  { name: 'Daylight Weakness', description: 'While in direct sunlight, this unit has disadvantage on Power tests.', cost: 0 },
  { name: 'Dead', description: 'This unit automatically succeeds on Morale tests and cannot be diminished.', cost: 0 },
  { name: 'Dig!', description: 'As an action, choose a fortification space and remove this unit. Next activation, fortification takes 2d6 damage and this unit breaks.', cost: 0 },
  { name: 'Dire Hyena Mounts', description: 'This unit has advantage on Attack tests against diminished units.', cost: 0 },
  { name: 'Disruptive', description: 'Adjacent opposed units have a 25% chance of doing nothing when activating.', cost: 0 },
  { name: 'Draconic Ancestry', description: 'This unit cannot be disorganized or weakened, and is immune to the Harrowing trait.', cost: 0 },
  { name: 'Dragonkin', description: 'If an allied dragon is in battle or commander is draconic, this unit has advantage on Attack, Command, and Morale tests.', cost: 0 },
  { name: 'Drone', description: 'As an action, all opposed units in a rank must make a DC 15 Power test or suffer 1 casualty and be unable to move next activation. Once per battle.', cost: 0 },
  { name: 'Elf-shot', description: 'Successful Power test forces DC 10 Power test or target becomes weakened.', cost: 0 },
  { name: 'Embiggen', description: 'As a reaction on activation, size increases to 8, casualty die becomes d8 incremented twice, and advantage on Attack and Power tests. Once per battle.', cost: 0 },
  { name: 'Eternal', description: 'Advantage on Morale tests vs undead/fiends and vs Harrowing units.', cost: 0 },
  { name: 'Ethereal', description: 'This unit has +1 movement, may move through units, and ignores fortification bonuses when attacking.', cost: 0 },
  { name: 'Fade', description: 'After a successful Attack test, this unit may move back 1 space; opponents cannot Follow Up.', cost: 0 },
  { name: 'Fast Siege Weapon', description: 'This unit can attack fortifications, automatically hitting for 3 damage.', cost: 0 },
  { name: 'Fast Siege Weapon (Heavy)', description: 'Automatically hits fortifications for 5 damage.', cost: 0 },
  { name: 'Fearless', description: 'This unit automatically succeeds on Morale tests.', cost: 0 },
  { name: 'Fearsome', description: 'When making an Attack test, target must make a Morale test (DC = 8 + size) or suffer +1 casualty.', cost: 0 },
  { name: 'Feast', description: 'At end of activation, if any diminished unit is adjacent, increment this unit’s casualty die.', cost: 0 },
  { name: 'Fire Blast', description: 'As an action, force two adjacent units to make DC 13 Power test or suffer 2 casualties. Recharge 5–6.', cost: 0 },
  { name: 'Fire Breath', description: 'As an action, force three adjacent units to make Power test (DC = 8 + size) or suffer 2 casualties and gain fire tokens. Recharge 5–6.', cost: 0 },
  { name: 'Fire Immunity', description: 'Immune to fire/flame effects and fire tokens.', cost: 0 },
  { name: 'Flaming Weapons', description: 'Successful Power test also adds a fire token to target.', cost: 0 },
  { name: '“Follow the Standard!”', description: 'On successful Power test, each allied cavalry unit may make a reaction attack on that target.', cost: 0 },
  { name: 'Guerrillas', description: 'Successful Attack test vs infantry/artillery disorients the target.', cost: 0 },
  { name: 'Gulp', description: 'As an action, force adjacent infantry/artillery to make DC 15 Power test or become diminished/broken. Recharge 5–6.', cost: 0 },
  { name: 'Harrowing', description: 'Opposed non-elf units have disadvantage on Morale tests to attack this unit.', cost: 0 },
  { name: 'Jaunt', description: 'When this unit attacks, it may shift into the Ethereal Plane and cannot be targeted until next activation.', cost: 0 },
  { name: 'Mass Protection Against Evil', description: 'Opposed infantry/artillery must succeed on DC 15 Morale test to enter vanguard rank of this unit’s side.', cost: 0 },
  { name: 'Meld', description: 'As a reaction to a successful Attack test, this unit moves into the target’s space. Attacks on either unit have 50% chance of hitting wrong target.', cost: 0 },
  { name: 'Mobile', description: 'Advantage on Follow Up maneuver; Withdraw moves 2 spaces.', cost: 0 },
  { name: 'Nature’s Bond', description: 'This unit may take casualties for adjacent allied infantry/artillery units. Must deploy front rank.', cost: 0 },
  { name: 'None', description: 'This unit has no traits.', cost: 0 },
  { name: 'Noxious Fog', description: 'As an action place poison tokens; moving/activating in them causes casualties. Recharge 5–6.', cost: 0 },
  { name: 'Pack Tactics', description: 'When an adjacent unit with this trait uses Follow Up, this unit can move to any adjacent empty space.', cost: 0 },
  { name: 'Pike Training', description: 'Advantage on Set for Charge maneuver.', cost: 0 },
  { name: 'Point Blank', description: 'Successful Power test vs adjacent unit inflicts +1 casualty.', cost: 0 },
  { name: 'Poisonous', description: 'Successful Power test weakens target.', cost: 0 },
  { name: 'Pool of Soul’s Blood', description: 'Adjacent opposed infantry/artillery cannot leave their space.', cost: 0 },
  { name: 'Quadruped', description: 'This unit becomes cavalry for its movement. Recharge 5–6.', cost: 0 },
  { name: 'Ram Riders', description: 'Successful Power test forces DC 10 Power test or target becomes disoriented.', cost: 0 },
  { name: 'Reckless', description: 'Can take disadvantage on Attack to inflict +1 casualty.', cost: 0 },
  { name: 'Reflector', description: 'When failing Power test vs wand, roll d20; on 10+ the effect reflects to the attacker.', cost: 0 },
  { name: 'Regenerate', description: 'Each time this unit activates, increment its casualty die by 1.', cost: 0 },
  { name: 'Relentless', description: 'When suffering a breaking casualty, make DC 13 Power test to instead remain with 1 casualty.', cost: 0 },
  { name: 'Resolute', description: 'This unit always succeeds on Morale tests.', cost: 0 },
  { name: 'Rime', description: 'Adjacent infantry/artillery have 0 movement and cannot gain bonus movement.', cost: 0 },
  { name: 'Rock!', description: 'As an action, attack any opposed unit (disadvantage vs aerial). Recharge 4–6.', cost: 0 },
  { name: 'Rockbreaker', description: 'Deals double damage to fortifications.', cost: 0 },
  { name: 'Rolling Thunder', description: 'As an action, make opposed Power test to push target back or break it then advance.', cost: 0 },
  { name: 'Rush', description: 'Automatically succeeds on Follow Up maneuver.', cost: 0 },
  { name: 'Savage', description: 'Successful Attack test adds a bleed token (2 casualties).', cost: 0 },
  { name: 'Scourge of the Wild', description: 'This unit has +2 Attack and +2 Power vs orc, goblinoid, and elf units.', cost: 0 },
  { name: 'Scouts', description: 'This unit can deploy into the rear rank of an opposed army.', cost: 0 },
  { name: 'Screech', description: 'As an action, force DC 15 Power test or target becomes misled. Recharge 4–6.', cost: 0 },
  { name: 'Shock Troops', description: 'Each time this unit diminishes another unit, gain +2 Attack and +2 Power for the battle.', cost: 0 },
  { name: 'Siege Engine', description: 'This unit can attack fortifications, dealing 1d6 damage on a hit.', cost: 0 },
  { name: 'Smoke Screen', description: 'Opposed units have disadvantage on Attack tests against this unit.', cost: 0 },
  { name: 'Spit Upon Their Horns', description: 'Successful Attack test pushes target back 1 space.', cost: 0 },
  { name: 'Stalwart', description: 'While diminished, opposed infantry/cavalry have disadvantage on Power tests.', cost: 0 },
  { name: 'Stinky', description: 'Adjacent opposed units have disadvantage on Attack tests.', cost: 0 },
  { name: 'Stone', description: 'Adjacent opposed units suffer 1 casualty when they activate.', cost: 0 },
  { name: 'Stoneskin', description: 'As a reaction to taking casualties from artillery, ignore 1 casualty.', cost: 0 },
  { name: 'Strength in Numbers', description: 'Starts battle with +1 casualty for each other undead unit in its army.', cost: 0 },
  { name: 'Stupid', description: 'Each attack has 25% chance to hit random adjacent unit.', cost: 0 },
  { name: 'Swords of the Dragon Lord', description: 'Successful Attack test forces DC 13 Morale or +1 casualty.', cost: 0 },
  { name: 'To the Death', description: 'If this unit breaks due to an opposed test, the attacker suffers 1 casualty.', cost: 0 },
  { name: 'Veterans of a Thousand Wars', description: 'Movement +1; +1 damage when attacking lower-tier units.', cost: 0 },
  { name: 'Wail', description: 'Once per battle, adjacent opposed units make DC 15 Power test or suffer casualties and morale penalties.', cost: 0 },
  { name: 'Warbred', description: 'On successful Power test, may make DC 10 Command test to attack again.', cost: 0 },
  { name: 'Wave', description: 'Successful Power test pushes target back; if blocked, both it and the unit behind suffer 1 casualty.', cost: 0 },
  { name: 'Whirlwind', description: 'Successful Attack test vs infantry inflicts −2 Attack/Defense (once per battle per unit).', cost: 0 },
  { name: 'You Follow!', description: 'When this unit successfully uses Follow Up, each goblinoid unit in the rank it leaves may move 1 space.', cost: 0 },
  {
    name: 'Armor Osmosis',
    description:
      'When a heavy or superheavy unit adjacent to this unit breaks, increment this unit’s casualty die.',
    cost: 0,
  },
  {
    name: 'Beacon of Courage',
    description:
      'This unit and any adjacent allied units automatically succeed on the Morale test to attack units with the Harrowing trait.',
    cost: 0,
  },
  {
    name: 'Beacon of Order',
    description:
      'Adjacent allied units can use this unit’s Power bonus on tests to resist battle magic and its Morale bonus to avoid suffering a casualty from battle magic.',
    cost: 0,
  },
  {
    name: 'Bless the Rains',
    description:
      'Once per battle, as an action, this unit turns the battlefield’s terrain to rain until the end of the battle or until terrain is changed again.',
    cost: 0,
  },
  {
    name: 'Close Enough',
    description: 'This unit counts as a dragon for the purpose of other units’ Dragonkin trait.',
    cost: 0,
  },
  {
    name: 'Cunning Ambush',
    description:
      'When this unit succeeds on a Power test as part of an attack, it may cause the target to suffer an extra casualty and become hidden until its next activation. Recharge 4–6.',
    cost: 0,
  },
  {
    name: 'Defy Gravity',
    description:
      'As an action, choose one adjacent unit. That unit becomes aerial and is removed from the battlefield until the end of its next activation, then reappears in an empty space. Recharge 6.',
    cost: 0,
  },
  {
    name: 'Directed Fire',
    description:
      'When this unit attacks a target that is not exposed, allied Tier I and Tier II artillery that are not siege weapons may attack that target as a reaction.',
    cost: 0,
  },
  {
    name: 'Expert Fade',
    description:
      'After a successful Attack test, this unit can move 1 space. Opposed units cannot use Follow Up against this movement.',
    cost: 0,
  },
  {
    name: 'Find Path',
    description:
      'When deployed, place two hidden path tokens on opposite sides of the battlefield. Elf units may move between them as if adjacent; non-elves take 1 casualty if they end their activation on a path. Tokens shift forward if their rank collapses.',
    cost: 0,
  },
  {
    name: 'First Strike',
    description: 'When deployment ends, this unit activates.',
    cost: 0,
  },
  {
    name: 'Frame',
    description:
      'When this unit is diminished, it has disadvantage on attacks and its Damage is reduced by 1.',
    cost: 0,
  },
  {
    name: 'Fury',
    description:
      'Whenever this unit suffers casualties, its Attack and Power increase by 1 for each casualty until battle’s end. While diminished, its Damage increases by 1.',
    cost: 0,
  },
  {
    name: 'Goblin Battle Platform',
    description:
      'This unit cannot be rallied in battle. When it breaks, place a Goblin Smokers unit under your control; they disband after battle, and then you may attempt to rally this unit.',
    cost: 0,
  },
  {
    name: 'Harpoon',
    description:
      'On a successful Power test against a cavalry or aerial unit, the target becomes snared and this unit’s activation ends.',
    cost: 0,
  },
  {
    name: 'Hellfire Cannons',
    description:
      'As an action, force all opposed aerial units to make a DC 13 Command test. Fail: 2 casualties and disadvantage on Attack until next turn. Success: 1 casualty. Recharge 5–6.',
    cost: 0,
  },
  {
    name: 'It Will Burn As We Burn',
    description:
      'When this unit has fire tokens and succeeds on a Power test as part of an attack, the target gains a fire token that inflicts 1 casualty.',
    cost: 0,
  },
  {
    name: 'Lightning',
    description:
      'On a successful Power test as part of an attack, the target must make a Power test (DC = 10 + this unit’s tier). Fail: disorganized. Success: disoriented.',
    cost: 0,
  },
  {
    name: 'Made from Magic',
    description:
      'This unit has advantage on tests to use battle magic. Opponents have disadvantage when using battle magic against this unit.',
    cost: 0,
  },
  {
    name: 'Maneuver: Break Them',
    description:
      'As a reaction to diminishing a unit, make a DC 16 Command test. On a success, the diminished unit breaks.',
    cost: 0,
  },
  {
    name: 'Maneuver: Focused Aim',
    description:
      'As a bonus action, increase this unit’s Damage by 1 until the end of its activation. The unit must not have moved, and cannot move until its next activation. Recharge 5–6.',
    cost: 0,
  },
  {
    name: 'Maneuver: Scamp-ede of Corgis',
    description:
      'As an action, choose an exposed unit and frolic through its space. Opposed units become disorganized; allied units automatically succeed on Morale tests until next activation. Recharge 4–6.',
    cost: 0,
  },
  {
    name: 'Master Elf-shot',
    description:
      'On a successful Power test as part of an attack, the target must succeed on a DC 15 Power test or become weakened until its next activation.',
    cost: 0,
  },
  {
    name: 'Max Burn!',
    description:
      'As a reaction to activating, this unit may suffer 1 casualty to gain one extra attack and advantage on Power tests this activation.',
    cost: 0,
  },
  {
    name: 'Mobile Battery',
    description:
      'On its activation, this unit may either take an action or move, but not both.',
    cost: 0,
  },
  {
    name: 'Now This Is an AAAUUUGH!!!',
    description:
      'When this unit is diminished, each time it takes casualties from an attack, the attacker suffers 1 casualty.',
    cost: 0,
  },
  {
    name: 'Offensive',
    description:
      'As a reaction to failing an Attack test, this unit may attempt a DC 13 Command test. On a success, it may attack again.',
    cost: 0,
  },
  {
    name: 'Only the Smart Survive',
    description:
      'This unit has advantage on tests to resist battle magic, and maneuvers attempted against this unit have disadvantage.',
    cost: 0,
  },
  {
    name: 'Owlbears Can’t Fly?!',
    description:
      'While this unit is cavalry, it may use a bonus action to become aerial until the beginning of its next activation. Recharge 5  6.',
    cost: 0,
  },
  {
    name: 'Plagued',
    description:
      'When this unit succeeds on a Power test as part of an attack, the target gains a poison token. Each poison token inflict',
    cost: 0,
  },
  {
    name: 'Amphibious',
    cost: 50,
    description:
      'This unit does not suffer terrain penalties for fighting in water or on land.',
  },
  {
    name: 'Bred for war',
    cost: 100,
    description:
      'This unit cannot be diminished, and cannot have disadvantage on morale checks.',
  },
  {
    name: 'Brutal',
    cost: 200,
    description: 'This unit inflicts 2 casualties on a successful power check.',
  },
  {
    name: 'Courageous',
    cost: 50,
    description:
      'Once per battle, this unit can choose to succeed on a morale check it just failed.',
  },
  {
    name: 'Eternal',
    cost: 50,
    description:
      'This unit cannot be horrified, and it always succeeds on morale checks to attack undead and fiends.',
  },
  {
    name: 'Frenzy',
    cost: 50,
    description:
      'If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.',
  },
  {
    name: 'Horrify',
    cost: 200,
    description:
      'If this unit inflicts a casualty on an enemy unit, that unit must make a dc 15 morale check.Failure exhausts the unit.',
  },
  {
    name: 'Martial',
    cost: 100,
    description:
      'If this unit succeeds on a power check and its size is greater than the defending unit, it inflicts 2 casualties.',
  },
  {
    name: 'Mindless',
    cost: 100,
    description: 'This unit cannot fail morale checks.',
  },
  {
    name: 'Regenerate',
    cost: 200,
    description:
      'When this unit refreshes, increment its casualty die.This trait ceases to function if the unit suffers a casualty from battle magic.',
  },
  {
    name: 'Ravenous',
    cost: 50,
    description:
      'While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die. ',
  },
  {
    name: 'Rock-hurler',
    cost: 250,
    description:
      'If this unit succeeds on an attack check, it inflicts 2 casualties.Against fortifications, it inflicts 1d6 casualties.',
  },
  {
    name: 'Savage',
    cost: 50,
    description:
      'This unit has advantage on the first attack check it makes each battle.',
  },
  {
    name: 'Stalwart',
    cost: 50,
    description:
      'Enemy battle magic has disadvantage on power checks against this unit.',
  },
  {
    name: 'Twisting Roots',
    cost: 200,
    description:
      'As an action, this unit can sap the walls of a fortification.Siege units have advantage on power checks against sapped fortifications.',
  },
  {
    name: 'Undead',
    cost: 50,
    description:
      'Green and regular troops must pass a morale check to attack this unit.Each enemy unit need only do this once.',
  },
  {
    name: 'Charge',
    description:
      'Cannot use while engaged. A Charge is an attack with advantage on the Attack check.It inflicts 2 casualties on a successful Power check.The charging unit is then engaged with the defending unit and must make a DC 13 Morale check to disengage.',
    cost: 0,
  },
  {
    name: 'Always Diminished',
    description: 'This unit it always diminished.',
    cost: 0,
  },
  {
    name: 'Siege Engine',
    description:
      'This unit can attack fortifications, dealing 1d6 damage on a hit.',
    cost: 0,
  }
];
